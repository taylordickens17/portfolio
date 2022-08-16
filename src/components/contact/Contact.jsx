import React from "react";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <header id="greetings-container" class="greetings-container">
        <h1 class="contact-me-header">Contact Me</h1>
        <form action="" id="contact-form" class="contact-form">
          <div class="form-control">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
            <small>Error Message</small>
          </div>
          <div class="form-control">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" />
            <small>Error Message</small>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email" />
            <small>Error Message</small>
          </div>
          <div class="form-control">
            <label for="message">Message</label>
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
