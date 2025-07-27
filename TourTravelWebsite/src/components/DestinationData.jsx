import React from 'react'
import './Dwstination.styles.css'
function DestinationData(props) {
  return (
   <div className={props.className}>
            <div className="des-text">
                <h2>
                    {props.heading}
                </h2>
                <p>
                    {props.description}
                </p>

            </div>
            <div className="image">
  <div>
    <img
      src={props.img1}
      alt="img"
    />
  </div>
  <div>
    <img
      src={props.img2}
      alt="img"
    />
  </div>
</div>

        </div>
  )
}

export default DestinationData