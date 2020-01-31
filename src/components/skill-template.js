import React from "react";

const About = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt="Avatar" src={props.src}></img>
        </div>
        <div className="flip-card-back">
          <h2>{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
