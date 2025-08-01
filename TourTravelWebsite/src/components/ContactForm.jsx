import React from 'react'
import './contactForm.styles.css'

function ContactForm() {
  return (
    <div className="form-container">
        <h1>Contact Us</h1>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>

        </form>
    </div>
  )
}

export default ContactForm