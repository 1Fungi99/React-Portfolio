import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="jumbotron" id="contact-me">
        <div className="white-text">
          <h2>Contact Me</h2>
          <div className="h-divider"></div>
          <h4>Email: ijustin17@gmail.com</h4>
          <h4>Phone: (213) 864-5887</h4>
          <div className="row contact">
            <a
              target="_blank"
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/justin-reed-cheng-37b425194/"
              role="button"
            >
              Linkedin
            </a>
            <a
              target="_blank"
              className="btn btn-secondary"
              href="https://www.facebook.com/justinpc2"
              role="button"
            >
              Facebook
            </a>
            <a
              target="_blank"
              className="btn btn-secondary"
              href="https://twitter.com/JustinReedCheng"
              role="button"
            >
              Twitter
            </a>
            <a
              target="_blank"
              className="btn btn-secondary"
              href="https://github.com/1Fungi99"
              role="button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// function Twitter(){window.open("https://twitter.com/JustinReedCheng");

export default Contact;
