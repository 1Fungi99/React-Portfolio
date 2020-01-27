import React from "react";

function Liri() {
  return (
    <div class="text-center">
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
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">
            140x140
          </text>
        </svg>
      </div>
      <h2>Liri Node App</h2>
      <p>
        This node based application is used to demonstrate the power of Node.js
        and NPMs. Simple tasks are used to collect useful data on movies, songs,
        artists, concert dates, and concert venues. This application is similar
        to Siri, why the app is called Liri. This is not a full Speech
        Translation engine, just a small data scraper for specific data.
      </p>
      <p>
        <a
          class="btn btn-secondary"
          href="https://github.com/1Fungi99/Liri-node-app"
          role="button"
        >
          View details
        </a>
      </p>
    </div>
  );
}

export default Liri;
