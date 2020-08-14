import React from "react";

import { Header, TitlesDiv, Headings, Navbar, NavbarList, NavbarListItem } from './LandingPage.style'

const LandingPage = () => {
  return (
    <Header>
      <TitlesDiv>
        <Headings>Yiayia Malama</Headings>
        <Headings>Papou Dimitri</Headings>
      </TitlesDiv>
      <Navbar>
        <NavbarList>
          <NavbarListItem>Archive</NavbarListItem>
          <NavbarListItem>Lessons</NavbarListItem>
          <NavbarListItem>Films</NavbarListItem>
          <NavbarListItem>Myths</NavbarListItem>
          <NavbarListItem>Thassos</NavbarListItem>
        </NavbarList>
      </Navbar>
    </Header>
  );
};

export default LandingPage;
