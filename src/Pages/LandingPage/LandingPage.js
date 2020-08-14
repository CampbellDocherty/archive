import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Thassos from "../../Components/Thassos/Thassos";

import { Header, TitlesDiv, Headings } from "./LandingPage.style";

const LandingPage = () => {

  const endpoint = window.location.pathname

  const ComponentRender = () => {
    return <Thassos></Thassos>
  }

  return (
    <>
    <Header>
      <TitlesDiv>
        <Headings>Yiayia Malama</Headings>
        <Headings>Papou Dimitri</Headings>
      </TitlesDiv>
      <Navbar></Navbar>
    </Header>
    <main>
      {ComponentRender()}
    </main>
    </>
  );
};

export default LandingPage;
