import React from "react";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <header id="greetings-container" className="greetings-container">
        <h2>Hello there, friend! I'm</h2>
        <h1>Taylor Dickens</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime
          adipisci fuga nemo iste quaerat! Corrupti veritatis maiores explicabo
          libero necessitatibus, amet, dicta incidunt eum cum nihil veniam! Non,
          explicabo?
        </p>
        <p>
          Eum laudantium nihil ad laborum odio, omnis officiis molestiae cum at
          reprehenderit beatae esse illo vel vero dignissimos voluptates
          deleniti voluptatibus perferendis architecto, molestias voluptatem
          sapiente maiores aliquid! Laborum, blanditiis?
        </p>
        <button type="submit">Resume</button>
      </header>
      <Navbar />
    </div>
  );
};

export default Home;
