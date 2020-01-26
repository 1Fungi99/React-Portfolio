import React from "react";

function Home() {
  return (
    <div class="container">
      <div className="jumbotron text-center">
        <h1 className="name text-light">Justin Cheng</h1>
        <div class="h-divider mx-auto"></div>
        {/* <hr class="hr-light my-4"></hr> */}
        <h2 className="motto text-light">"Serving Information, Simply." </h2>
        <div className="mx-auto">
          <a type="a" className="btn btn-dark home-btn">
            LinkedIn
          </a>
          <a type="a" className="btn btn-dark home-btn">
            GitHub
          </a>
          <a
            href="https://twitter.com/JustinReedCheng"
            type="a"
            className="btn btn-dark home-btn"
            onclick="Twitter"
          >
            Twitter
          </a>
          <a type="a" className="btn btn-dark home-btn">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
// function Twitter(){window.open("https://twitter.com/JustinReedCheng");

export default Home;
