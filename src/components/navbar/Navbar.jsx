import React from "react";

import Home from "../home/Home";
import Project from "../project/Project";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";

const Navbar = () => {
  return (
    <div>
      <nav id="nav" class="nav">
        <div id="github-linkedin-container" class="github-linkedin-container">
          <button id="github-btn" class="github-btn">
            <a href="">
              <i class="fa-brands fa-github"></i>
            </a>
          </button>
          <button id="linkedin-btn" class="linkedin-btn">
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </button>
        </div>
        <ul>
          <li>
            Home
            {/* <a href={<Home />}>Home</a> */}
          </li>
          <li>
            Work
            {/* <a href={<Project />}>Work</a> */}
          </li>
          <li>
            Blog
            {/* <a href={<Blog />}>Blog</a> */}
          </li>
          <li>
            Contact
            {/* <a href={<Contact />}>Contact</a> */}
          </li>
        </ul>
        <div class="toggle-icons">
          <i class="fa-solid fa-moon"></i>
          <i class="fa-solid fa-sun"></i>
        </div>
        <div id="light-dark-mode-container" class="light-dark-mode-container">
          <input type="checkbox" />
          <span id="light-dark-mode" class="light-dark-mode round"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
