import React, { useEffect } from "react";
import './styles.css';

function LoadMore() {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [count, setCount] = React.useState(0);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setCount((prevCount) => prevCount + 10);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (products.length === 0) return <div>No products available</div>;

  return (
    <div className="container-load-more">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button onClick={fetchProducts} className="load-more">
          Load More
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
