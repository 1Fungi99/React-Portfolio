import React from "react";

import Skill from "../props/skills";
import About from "../about";

const AboutMeContent = function() {
  return (
    <div className="container-fluid about-me">
      <div className="header white-text text-center">Skills</div>
      <div className="row justify-content-center">
        <div className="col-lg-3">
          {/* Node.js */}
          <About name={Skill[0].name} src={Skill[0].src} text={Skill[0].text} />
          {/* MySQL */}
          <About name={Skill[1].name} src={Skill[1].src} text={Skill[1].text} />
          {/* JS */}
          <About name={Skill[2].name} src={Skill[2].src} text={Skill[2].text} />
          {/* Bootstrap */}
          <About name={Skill[3].name} src={Skill[3].src} text={Skill[3].text} />
        </div>
        <div className="col-lg-3">
          {/* Mongo */}
          <About name={Skill[4].name} src={Skill[4].src} text={Skill[4].text} />
          {/* HTML */}
          <About name={Skill[5].name} src={Skill[5].src} text={Skill[5].text} />
          {/* CSS */}
          <About name={Skill[6].name} src={Skill[6].src} text={Skill[6].text} />
          {/* React */}
          <About name={Skill[7].name} src={Skill[7].src} text={Skill[7].text} />
        </div>
        <div className="col-lg-3">
          {/* jQuery */}
          <About name={Skill[8].name} src={Skill[8].src} text={Skill[8].text} />
          {/* Git */}
          <About name={Skill[9].name} src={Skill[9].src} text={Skill[9].text} />
          {/* Firebase */}
          <About
            name={Skill[10].name}
            src={Skill[10].src}
            text={Skill[10].text}
          />
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
