import React from 'react'
import './footer.styles.css'

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose your favourite destination</p>
            </div>
            <div>
                <h3>Find us</h3>
                <a href="/">
                 <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                 <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                 <i className="fa-brands fa-twitter-square"></i>    
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>
                    Project
                </h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>
                    Community
                </h4>
                <a href="/">GitHub</a>
                <a href="/">Discord</a>
                <a href="/">Twitter</a>
                <a href="/">Facebook</a>
            </div>
            <div>
                <h4>
                    Help
                </h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a> 
                <a href="/">Contact Us</a>
                <a href="/">About Us</a>
            </div>
            <div>
                <h4>
                    Legal
                </h4>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Service</a>
            </div>
        </div>
    </div>
  )
}

export default Footer