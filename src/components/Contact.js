import React from 'react';
import './Contact.css'; // Import the CSS for the Contact page

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact Us 🚀</h3>
      <form 
          className="contact-form" 
          action="https://formspree.io/f/xdkovrrq" 
          method="POST"
        >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message" 
                  rows="3" 
                  placeholder="Write your message" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
      </form>

    </div>
  );
};

export default Contact;
