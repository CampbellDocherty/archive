import React from "react";

import Navbar from "../../Components/Navbar/Navbar";

import { Header, TitlesDiv, Headings } from "./LandingPage.style";

const LandingPage = () => {
  return (
    <Header>
      <TitlesDiv>
        <Headings>Yiayia Malama</Headings>
        <Headings>Papou Dimitri</Headings>
      </TitlesDiv>
      <Navbar></Navbar>
    </Header>
  );
};

export default LandingPage;
