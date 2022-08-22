import React from "react";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact">
      <header id="greetings-container" className="greetings-container">
        <h1 className="contact-me-header">Contact Me</h1>
        <form action="" id="contact-form" className="contact-form">
          <div className="form-control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
            <small>Error Message</small>
          </div>
          <div className="form-control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" />
            <small>Error Message</small>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
            <small>Error Message</small>
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="72"
              rows="10"
              placeholder="Enter your message..."
            ></textarea>
            <small>Error Message</small>
          </div>
          <button type="submit">Send</button>
        </form>
      </header>
      <Navbar />
    </div>
  );
};

export default Contact;
