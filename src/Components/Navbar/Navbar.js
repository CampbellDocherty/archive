import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavbarList,
  NavbarListItem,
  Header,
  Headings,
  TitlesDiv,
} from "./Navbar.style";

const Navbar = () => {
  const LinkStyle = { textDecoration: "none", color: "black" };

  return (
    <Header>
      <TitlesDiv>
        <Headings>GAP ARCHIVE</Headings>
      </TitlesDiv>
      <Nav>
        <NavbarList>
          <NavbarListItem>
            <Link to="/" style={LinkStyle}>
              Archive
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link to="/Lessons" style={LinkStyle}>
              Lessons
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link to="/Films" style={LinkStyle}>
              Films
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link to="/Myths" style={LinkStyle}>
              Myths
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link to="/Thassos" style={LinkStyle}>
              Thassos
            </Link>
          </NavbarListItem>
        </NavbarList>
      </Nav>
    </Header>
  );
};

export default Navbar;
