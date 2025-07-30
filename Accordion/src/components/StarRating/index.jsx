import React from 'react'
import {FaStar} from 'react-icons/fa6'
import './styles.css'

function StarRating({ noOfStars =10}) {
    const [rating, setRating] = React.useState();
    const [hover, setHover] = React.useState();

    function handleClick(index) {
        setRating(index+1);
    }

    function handleMouseEnter(index) {
        setHover(index+1);    
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    return <FaStar
                        key={index}
                        className={index<=(hover||rating)?"active":"inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        size={30}
                        color={index < (hover || rating) ? "gold" : "gray"}
                    />

        })
      }
    </div>
  )
}

export default StarRating