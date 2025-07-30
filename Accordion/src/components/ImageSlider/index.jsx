import React, { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css';

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

function handleNext() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
}
function handlePrevious() {
    setCurrentIndex(currentIndex===0?images.length-1:currentIndex - 1);

}

  async function fetchImages(geturl) {
    try {
      setLoading(true);
      setErrorMsg(null); // reset any previous error
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setImages(data.slice(0, limit));
    } catch (error) {
      console.error('Error fetching images:', error);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url, page, limit]); // added page and limit to dependencies

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error: {errorMsg}</div>;
  }

  return (
    <div className='parent-container'>
    <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow Arrow-left'/>
        {
            images && images.length ?
                images.map((imageItem,index) => (
                    <img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={`Image by ${imageItem.author}`}
                        className={currentIndex===index?"current-image":"current-image hide-current-image"}
                        onClick={() => setCurrentIndex(index)}
                    />
                )) : null}
        <BsArrowRightCircleFill onClick={handleNext} className='arrow Arrow-right'/>
        <span className='circle-indicators'>
            {
                images && images.length ?
                images.map((_,index)=><button key={index}
                    className={currentIndex===index?"current-indicator":"current-indicator hide-current-indicator"}
                >
                    {index + 1}
                </button>):null
            }
        </span>
    </div>
    </div>
  );
}

export default ImageSlider;
