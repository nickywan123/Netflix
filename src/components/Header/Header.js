import React from "react";
import bgimg from "./img/bg.jpg";
import styled from "styled-components";
import "./header.scss";
import Nav from "../Nav/Nav.js";
import Pitch from "../Pitch/Pitch";

// const Header = styled.header`
//   background: linear-gradient(
//       to right,
//       rgba(0, 0, 0, 0.75),
//       rgba(0, 0, 0, 0.09)
//     ),
//     url(${bgimg});
//   height: 100vh;
//   @media (max-width: 1000px) {
//     height: 90vh;
//   }
// `;

function header() {
  return (
    <header className="header">
      <Nav />
      <Pitch />
    </header>
  );
}

export default header;
