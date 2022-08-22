import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
        <nav id="nav" className="nav">
          <div id="github-linkedin-container" className="github-linkedin-container">
            {/* <button id="github-btn" className="github-btn">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <button id="linkedin-btn" className="linkedin-btn">
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </button> */}
          </div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="toggle-icons">
            {/* <i className="fa-solid fa-moon"></i>
            <i className="fa-solid fa-sun"></i> */}
          </div>
          <div id="light-dark-mode-container" className="light-dark-mode-container">
            {/* <input type="checkbox" />
            <span id="light-dark-mode" className="light-dark-mode round"></span> */}
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
