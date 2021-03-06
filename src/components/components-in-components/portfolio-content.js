import React from "react";

import CardContent from "../card-template";
import PortfolioElements from "../props/portfolio";

const PortfolioSkillContent = function() {
  return (
    <div className="">
      <div
        className="container bottom-buffer justify-content-center"
        id="portfolio-container"
      >
        <div className="card side-buffer">
          {/* Shelve-It */}
          <CardContent
            name={PortfolioElements[3].name}
            text={PortfolioElements[3].text}
            href={PortfolioElements[3].href}
          />
        </div>
        <div className="card side-buffer">
          {/* <DestinationStation /> */}
          <CardContent
            name={PortfolioElements[0].name}
            text={PortfolioElements[0].text}
            href={PortfolioElements[0].href}
          />
        </div>
        <div className="card side-buffer">
          {/* <Liri /> */}
          <CardContent
            name={PortfolioElements[1].name}
            text={PortfolioElements[1].text}
            href={PortfolioElements[1].href}
          />
        </div>
        <div className="card side-buffer">
          {/* <Bootstrap /> */}
          <CardContent
            name={PortfolioElements[2].name}
            text={PortfolioElements[2].text}
            href={PortfolioElements[2].href}
          />
        </div>
        <div className="card side-buffer">
          {/* <React Portfolio /> */}
          <CardContent
            name={PortfolioElements[4].name}
            text={PortfolioElements[4].text}
            href={PortfolioElements[4].href}
          />
        </div>
        <div className="card side-buffer">
          {/* <Bamazon /> */}
          <CardContent
            name={PortfolioElements[5].name}
            text={PortfolioElements[5].text}
            href={PortfolioElements[5].href}
          />
        </div>
      </div>
    </div>
  );
};
export default PortfolioSkillContent;
