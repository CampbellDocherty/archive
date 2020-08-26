import styled from 'styled-components';

const Nav = styled.nav`
  background-color: white;
  bottom: -2.5rem;
  display: flex;
  align-items: center;
  position: absolute;
`;

const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const NavbarListItem = styled.li`
  margin: 1rem;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.2rem;
  font-family: "Antic Slab";
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Header = styled.header`
  min-height: 6rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TitlesDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 0 2rem;
  z-index: 100;
`;

const Headings = styled.h2`
  font-weight: 100;
  letter-spacing: 0.6rem;
  font-family: "Open Sans", serif;
`;


export { Nav, NavbarList, NavbarListItem, Header, Headings, TitlesDiv }