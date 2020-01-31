import React from "react";

import Skill from "../props/skills";
import About from "../skill-template";

const AboutMeContent = function() {
  return (
    <div className="container about-me">
      <div className="profile">
        <div class="text-center shaded">
          <div>
            <svg
              class="bd-placeholder-img rounded-circle"
              xmlns="http://www.w3.org/2000/svg"
              preserveaspectratio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 140x140"
              height="140"
              width="140"
            >
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>
            <h2 className="text-white">About me</h2>
            <h5 className="white-text padding-buffer">
              I always dreamed about being an astronaut as a child, flying
              through the stars and adventuring the final frontier. Even with
              LEGOs, I have always looked to the Star Wars sets, imagining what
              is out there. The glisten that was in my eyes, looked like the
              stars itself full of curiosity and imagination of a child. Then
              one day, my father brought home a broken computer (Would not turn
              on). Me, full of precociousness, fiddled with the external wires.
              To my astonishment, I managed to allow power to surge through the
              computer once again. This sparked (Get it?) my interest in the
              technology field. Though, I did not know it this early. A nested
              interest in computers planted its seed in my mind. Now, as a
              college student, with a love for making computers has turned to
              the joys of software engineering. Coding through Collin Community
              College, The University of Texas at Arlington and currently
              Southern Methodist University.My specialties include quickly
              learning and applying recently new skills, concepts or programming
              languages, web development, and responsive website design. Always
              always looking for new principles, programming languages, or any
              frameworks to apply to my future works.
            </h5>
          </div>
          <p></p>
        </div>
      </div>
      {/* Set for new component */}
      <div className="white-text buffer">
        <h4 className="text-center">Skills</h4>
        <div className="row justify-content-center">
          {/* Node.js */}
          <About name={Skill[0].name} src={Skill[0].src} text={Skill[0].text} />
          {/* MySQL */}
          <About name={Skill[1].name} src={Skill[1].src} text={Skill[1].text} />
          {/* JS */}
          <About name={Skill[2].name} src={Skill[2].src} text={Skill[2].text} />
          {/* Bootstrap */}
          <About name={Skill[3].name} src={Skill[3].src} text={Skill[3].text} />

          {/* Mongo */}
          <About name={Skill[4].name} src={Skill[4].src} text={Skill[4].text} />
          {/* HTML */}
          <About name={Skill[5].name} src={Skill[5].src} text={Skill[5].text} />
          {/* CSS */}
          <About name={Skill[7].name} src={Skill[7].src} text={Skill[7].text} />
          {/* React */}
          <About name={Skill[6].name} src={Skill[6].src} text={Skill[6].text} />

          {/* jQuery */}
          <About name={Skill[8].name} src={Skill[8].src} text={Skill[8].text} />
          {/* Git */}
          <About
            name={Skill[10].name}
            src={Skill[10].src}
            text={Skill[10].text}
          />
          {/* Firebase */}
          <About name={Skill[9].name} src={Skill[9].src} text={Skill[9].text} />
          {/* VSCode */}
          <About
            name={Skill[11].name}
            src={Skill[11].src}
            text={Skill[11].text}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMeContent;
