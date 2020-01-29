import React from "react";
import GitHubButton from "react-github-btn";

function HomeFooter() {
  return (
    <div className="footer">
      <GitHubButton
        href="https://github.com/1Fungi99"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        aria-label="Follow @ntkme on GitHub"
      >
        Follow
      </GitHubButton>
      {/* <a
        href="https://twitter.com/JustinReedCheng?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-size="large"
        data-show-screen-name="false"
        data-show-count="false"
      >
        Follow
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script> */}
      <a
        className="twitter-follow-button"
        href="https://twitter.com/JustinReedCheng"
        data-size="large"
        data-show-count="false"
        data-show-screen-name="false"
      ></a>
    </div>
  );
}
export default HomeFooter;
