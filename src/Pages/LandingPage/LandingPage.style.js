import styled from "styled-components";

const Header = styled.header`
  min-height: 5rem;
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


export { Header, TitlesDiv, Headings };
