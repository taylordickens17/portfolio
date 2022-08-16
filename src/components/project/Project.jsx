import React from "react";
import Navbar from "../navbar/Navbar";

const Project = () => {
  return (
    <div>
      <header id="greetings-container" class="greetings-container">
        <h1>Work</h1>
      </header>
      <section id="project-container" class="project-container">
        <div class="project-card">
          <h3 class="project-header">Project Header</h3>
          <a href="" class="project-link">
            Go See Live
          </a>
          <p class="project-blurb">
            Nam corrupti ullam dolorem tempora, suscipit tenetur voluptate
            officiis soluta provident recusandae. Doloremque nemo accusantium
            perferendis perspiciatis, fuga magni cupiditate nihil, quo eius nam
            totam fugit necessitatibus non doloribus minima!
          </p>
        </div>
        <div class="project-card">
          <h3 class="project-header">Project Header</h3>
          <a href="" class="project-link">
            Go See Live
          </a>
          <p class="project-blurb">
            Quasi at modi, ipsam ullam magnam corrupti. Animi, aliquid amet?
            Fugiat sint, esse rem dicta aliquid voluptatibus, vitae quas
            consectetur nisi enim eius dignissimos error minus, sed nemo
            exercitationem? Necessitatibus.
          </p>
        </div>
        <div class="project-card">
          <h3 class="project-header">Project Header</h3>
          <a href="" class="project-link">
            Go See Live
          </a>
          <p class="project-blurb">
            Quasi labore accusamus beatae distinctio doloribus cupiditate optio
            dolorem magnam a quae, deleniti officiis ipsam ratione, eum, minus
            commodi quam asperiores modi vero repellat ex qui tenetur explicabo
            temporibus. Iste?
          </p>
        </div>
      </section>
      <Navbar />
    </div>
  );
};

export default Project;
