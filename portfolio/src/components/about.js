import React from "react";

const About = props => {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img alt="Avatar" src={props.src}></img>
        </div>
        <div class="flip-card-back">
          <h2>{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
