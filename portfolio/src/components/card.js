import React from "react";

function CardContent() {
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
      <h2>Heading</h2>
      <p>
        Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Vestibulum id ligula porta felis euismod semper. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
        fermentum massa justo sit amet risus.
      </p>
      <p>
        <a class="btn btn-secondary" href="#" role="button">
          View details
        </a>
      </p>
    </div>
  );
}

export default CardContent;
