import "./style.css";

import { Button } from "antd";

function About() {
  return (
    <div className="other-stuff">
      <a href="https://www.analyticsmania.com/p/getting-started-with-google-analytics-4" target="_blank" rel="noreferrer">
        <h1>Google Analytics Ebook</h1>
      </a>
      <a href="https://www.analyticsmania.com/post/google-tag-manager-tutorial-for-beginners/" target="_blank" rel="noreferrer">
        <h1>Google Analytics Complete Tutorial</h1>
      </a>
      <Button
        type="primary"
        onClick={() => alert("You clicled me!")}
      >
        Click Me!
      </Button>
    </div>
  );
}

export default About;
