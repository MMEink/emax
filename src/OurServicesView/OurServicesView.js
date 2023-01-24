import BlackBanner from "../BlackBanner";

import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function OurServicesView() {
  return (
    <Row>
      <h1>Our Services</h1>
      <BlackBanner />
    </Row>
  );
}

export default OurServicesView;
