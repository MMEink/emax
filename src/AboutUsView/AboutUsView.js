import BlackBanner from "../BlackBanner";
import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./AboutUsView.css";

const Header = styled.div`
  padding: 10rem;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function AboutUsView() {
  return (
    <Row>
      <Header>
        <h1 className="pageTitle">About Us</h1>
        <div className="arrowContainer">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bg-overlay"></div>
      </Header>
      <BlackBanner />
    </Row>
  );
}

export default AboutUsView;
