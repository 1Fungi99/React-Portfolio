import React from "react";
import GitHubButton from "react-github-btn";

function HomeFooter() {
  return (
    <div className="footer">
      <GitHubButton
        href="https://github.com/1Fungi99/React-Portfolio"
        target="_blank"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        aria-label="Follow @ntkme on GitHub"
      >
        Follow This Repository
      </GitHubButton>
    </div>
  );
}
export default HomeFooter;
