import { Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
export default function BlackBanner() {
  return (
    <div className="banner">
      <div className="bannerContent">
        <div className="lfContent">
          <span className="letstalk">LET'S TALK</span>
          <h2>
            <span>about your</span> next project
          </h2>
          <span className="smallText" style={{ color: "#BBBBBB" }}>
            Get creative solutions
          </span>
        </div>
        <HashLink to="#contact" className="bannerBtnContainer">
          <Button className="bannerBtn">GET IN TOUCH</Button>
        </HashLink>
      </div>
    </div>
  );
}
