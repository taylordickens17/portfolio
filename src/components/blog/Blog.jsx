import React from "react";
import Navbar from "../navbar/Navbar";

const Blog = () => {
  return (
    <div className="blog">
      <header id="greetings-container" className="greetings-container">
        <h1>Blog</h1>
      </header>

      <section id="blog-container" className="blog-container">
        <div className="blog-card">
          <h3 className="blog-header">Blog Header</h3>
          <p className="blog-blurb">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
            provident quia velit molestiae non alias aut nemo sit perspiciatis
            ipsa similique nisi sapiente corporis cupiditate. Veritatis a
            doloremque similique explicabo?
          </p>
        </div>
        <div className="blog-card">
          <h3 className="blog-header">Blog Header</h3>
          <p className="blog-blurb">
            Est ex, necessitatibus optio exercitationem voluptas aut a quod
            adipisci aliquid porro velit tenetur quo quis reprehenderit tempora
            autem maiores officia laboriosam? Quia, ab similique animi amet
            dolorum enim totam!
          </p>
        </div>
        <div className="blog-card">
          <h3 className="blog-header">Blog Header</h3>
          <p className="blog-blurb">
            Consequuntur ratione ab rerum quaerat dicta consequatur. Illo
            aliquid iure dignissimos! Cum distinctio eaque, exercitationem quas
            voluptatem excepturi praesentium quis eius in aut laborum aliquam
            officia. Ad sequi in fuga!
          </p>
        </div>
      </section>
      <Navbar />
    </div>
  );
};

export default Blog;
