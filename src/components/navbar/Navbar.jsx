import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../home/Home";
import Projects from "../project/Project";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";

const Navbar = () => {
  return (
    <Router>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
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
    </Router>
  );
};

export default Navbar;
