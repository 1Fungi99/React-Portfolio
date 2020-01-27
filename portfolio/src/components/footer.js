import React from "react";
import GitHubButton from "react-github-btn";

function HomeFooter() {
  return (
    <div class="footer">
      <GitHubButton
        href="https://github.com/1Fungi99"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        aria-label="Follow @ntkme on GitHub"
      >
        Follow
      </GitHubButton>
      <a
        href="https://twitter.com/JustinReedCheng?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
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
      ></script>
    </div>
  );
}
export default HomeFooter;
