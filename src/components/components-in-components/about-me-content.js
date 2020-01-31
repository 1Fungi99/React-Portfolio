import React from "react";

import AboutMeHeader from "../about-me";
import Skill from "../props/skills";
import About from "../skill-template";

const AboutMeContent = () => {
  return (
    <div className="container about-me">
      <AboutMeHeader />>{/* Set for new component */}
      <div className="white-text buffer shaded bottom-buffer">
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
