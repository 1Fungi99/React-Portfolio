import React from "react";

function Bootstrap() {
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
      <h2>Bootstrap Portfolio</h2>
      <p>
        THis is my old portfolio, made using Bootstrap, jQuery, Javascript and
        CSS. This old portfolio was the base of the current portfolio you are
        looking at!
      </p>
      <p>
        <a
          class="btn btn-secondary"
          href="https://github.com/1Fungi99/Bootstrap-Portfolio"
          role="button"
        >
          View details
        </a>
      </p>
    </div>
  );
}

export default Bootstrap;
