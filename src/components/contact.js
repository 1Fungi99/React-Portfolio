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
              rel="noopener noreferrer"
              className="fa fa-linkedin"
              href="https://www.linkedin.com/in/justin-reed-cheng-37b425194/"
            ></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-facebook"
              href="https://www.facebook.com/justinpc2"
            ></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-twitter"
              href="https://twitter.com/JustinReedCheng"
            ></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-github"
              href="https://github.com/1Fungi99"
              role="button"
            ></a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1kGwOnV0D9BO1B-9oFF0KnPNZ0wedjzf2/view?usp=sharing"
              download
            >
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/open-resume.png"
                className="fa fa-resume"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// function Twitter(){window.open("https://twitter.com/JustinReedCheng");

export default Contact;
