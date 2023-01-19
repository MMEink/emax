import { Nav, Button } from "react-bootstrap";
export default function BlackBanner() {
  return (
    <div className="banner">
      <div className="lfContent">
        <span className="letstalk">LET'S TALK</span>
        <h2>
          <span>about your</span> next project
        </h2>
        <span className="smallText" style={{ color: "#BBBBBB" }}>
          Get creative solutions
        </span>
      </div>
      <a href="#contact" className="bannerBtnContainer">
        <Button className="bannerBtn">GET IN TOUCH</Button>
      </a>
    </div>
  );
}
