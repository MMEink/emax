import styled from "styled-components";
import placeholder from "./images/webDesign-placeholder.jpg";

export const DropdownArrow = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -11px;
  left: 75px;
  transform: rotate(45deg);
  background-color: white;
  border-top: 1px solid #02c1fd;
  border-left: 1px solid #02c1fd;
  @media all and (max-width: 600px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  border: 1px solid #02c1fd;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  z-index: 9999;
  position: relative;
  top: 1rem;
  left: 2rem;
  height: 400px;
  width: 250px;
  ul {
    list-style: none;
    padding-left: 0;
  }
  ul li {
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  @media all and (max-width: 600px) {
    top: -0.5rem;
    left: 0rem;
    ul li {
      text-align: center;
    }
  }
  }
`;

export const DropdownBtn = styled.div`
  width: 20%;
`;

export const NavBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 38px;
  @media all and (max-width: 600px) {
    height: 100%;
  }
`;

export const Arrow = styled.span`
display: inline-block;
width: 8px;
height: 8px;
border-bottom: 1.5px solid black;
border-right: 1.5px solid black;
margin-left: 3px;
padding-top: 4px;
margin-bottom: 2px;
transform: rotate(-135deg);
}
`;

export const ServiceContent = styled.div`
  margin: 10rem 3rem;
  justify-content: space-evenly;
  display: flex;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    margin: 5rem 1rem;
  }

  @media all and (max-width: 600px) {
    margin: 2rem 0;
    flex-direction: column-reverse !important;
  }
`;

export const ServiceContentText = styled.div`
  width: 50%;
  padding: 2rem;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    padding: 0 2rem;

    h4 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media all and (max-width: 600px) {
    width: 100%;
    padding: 2rem 0;
    h4 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ServiceImgFrame = styled.div`
  width: 560px;
  height: 420px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .figure {
    width: 100%;
    height: 100%;
  }
  .image-1 {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
  }

  .image-2 {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: none;
  }
  @media all and (max-width: 1200px) {
    width: 350px;
    height: 200px;
    align-self: center;
  }
`;

export const WorkCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 0.5rem;
  width: 70%;
  margin: auto;
  margin-bottom: 4rem;
  .card {
    width: 90%;
  }
  .card:hover .card-img-top {
    filter: brightness(0.7);
  }
  @media all and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media all and (max-width: 1200px) and (min-width: 601px) {
    grid-gap: 0;
    width: 100%;
    margin: 1rem;
  }

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

export const WorkCardsNav = styled.ul`
  li {
    border: 2px solid #9e9e9e5c;
    list-style: none;
    padding: 0.5rem 1rem;
    font-weight: 600;
    color: #6e6c6c;
    cursor: pointer;
    display: inline-block;
    border-right: 1px;
  }
  width: 50%;
  justify-content: center;
  margin: 2rem auto;
  text-align: center;

  li:hover,
  li::after {
    background-color: #52a7b0;
    color: white;
  }

  li:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  li:last-child {
    border-right: 2px solid #9e9e9e5c;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media all and (max-width: 1400px) {
    width: 100%;
  }

  @media all and (max-width: 600px) {
    li {
      font-size: 0.5rem;
      padding: 0.5rem;
    }
  }
`;

export const WaveButton = styled.a`
  width: 300px;
  padding: 20px;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;

  &:hover .wave {
    top: -200px;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    position: relative;
    z-index: 1;
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: capitalize;
    word-wrap: none;
  }
  .wave {
    width: 300px;
    height: 300px;
    background-color: #02c1fd;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: -100px;
    transition: 0.4s;
  }
  .wave::before,
  .wave::after {
    width: 200%;
    height: 200%;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  .wave::before {
    border-radius: 45%;
    background-color: #04b1e6;
    animation: wave 10s linear infinite;
  }

  .wave::after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.5);
    animation: wave 15s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  @media all and (max-width: 1200px) {
    width: 230px;

    span {
      font-size: 12px;
    }
  }
`;

export const ModalCloseBtn = styled.button`
  width: 5%;
  font-size: 3rem;
  background: none;
  border: none;
  color: dimgrey;
  position: absolute;
  top: -100px;
  right: 0;
  font-weight: 900;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    top: -150px;
    right: 90px;
  }

  @media all and (max-width: 600px) {
    right: 25px;
  }
`;

export const ContentsSection = styled.div`
  display: flex;
  width: 75%;
  margin: 3rem auto;
  color: #444;

  div {
    width: 50%;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  .paragraph {
    margin-bottom: 2rem;
    width: 90%;
    font-weight: 500;
  }

  button {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    background-color: #32bac8;
    color: white;
    font-weight: 700;
  }

  .images {
    display: flex;
    justify-content: center;
  }

  .image1 {
    width: 40%;
    right: 12rem;
  }

  .image2 {
    margin-top: 1.5rem;
  }

  @media all and (max-width: 1200px) {
    margin-bottom: 0;
    flex-direction: column;

    div {
      width: 100%;
    }

    .image1 {
      width: 70%;
      right: 9rem;
      top: 72rem;
    }
    .paragraph {
      width: 100%;
    }
  }

  @media all and (max-width: 600px) {
    width: 90%;
    .paragraph {
      width: 100%;
    }

    .image1 {
      right: 6rem;
      top: 63rem;
    }
  }

  @media all and (max-width: 400px) {
    .image1 {
      top: 66rem;
    }
  }
`;

export const ServicesSubheader = styled.p`
  color: #02c1fd;
  border: 1px solid #02c1fd;
  border-radius: 20px;
  width: 11%;
  text-align: center;
  padding: 5px 0;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem 0;

  @media all and (max-width: 600px) {
    width: 20%;
  }
`;

export const PromiseSection = styled.div`
  background-color: #f2f4f4;
  color: #444;
  z-index: 999;

  .promiseContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 75%;
    margin: 6rem auto;
    grid-gap: 7rem;

    div {
      display: flex;
      flex-direction: column;

      img {
        width: 15%;
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media all and (max-width: 1200px) {
    .promiseContainer {
      width: 90%;
      grid-gap: 4rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media all and (max-width: 600px) {
    .promiseContainer {
      grid-template-columns: 1fr;
    }
  }
`;

export const AlertPageSection = styled.div`
  width: 75%;
  margin: 5rem auto;
  text-align: center;
  padding: 5rem;
  h1 {
    font-weight: 600;
  }
  .material-symbols-outlined {
    font-size: 2rem;
  }
  a div {
    margin-top: 2rem;
    text-decoration: underline;
    text-decoration-color: #02c1fd;
  }
`;

export const ServicePagesPortfolio = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  .portfolioCard:hover .coverImg{
    filter: brightness(0.7);
    top:-100px;
    transition: all 0.3s ease-in-out;
  }
  .infoBar{
    z-index:999;
    position:absolute;
    background-color:white;
    top:80%;
    width:100%;
    height:auto;
    padding:1rem;
    transform:translateY(100%);
    transition: all 0.3s ease-in-out;
  }

  .hovered{
    transform:translateY(0%);
  }
  }
  div {
    position: relative;
    overflow: hidden;
    height: 275px;
   .coverImg {
      position: relative;
      top: -27px;
      width: 100%;
      height: auto;
      min-height: 302px;
    }
  }

  @media all and (max-width: 1400px) {
    div{
     .coverImg {
        top: -18px;
      }
    }
  }

  @media all and (max-width: 1250px) {
    div {
      height: 240px;
     .coverImg {
        top: -10px;
        min-height: 250px;
      }

      .infoBar{
        top:72%;
      }
  }

  @media all and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    div {
     .coverImg {
        top: -8px;
      }
  }

  @media all and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    div {
      height: 200px;
     .coverImg {
        top: -20px;
        min-height: 220px;
      }
  }

  @media all and (max-width: 450px) {
    div {
      height: 180px;
     .coverImg {
        top: -10px;  
        min-height: 200px;    
      }
  }

 
`;
