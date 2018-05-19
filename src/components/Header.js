import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Flex } from "../elements";

const Nav = styled.nav`
  padding: ${props => props.theme.spacing};
  background: ${props => props.theme.gradient};
  margin-bottom: -1px;

  color: ${props => props.theme.secondary.dark};
`;

const HeaderNavLink = ({ style = {}, ...props }) => (
  <NavLink
    exact
    style={{
      textDecoration: "none",
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "inherit",
      ...style
    }}
    activeStyle={{ transform: "scale(1.2)", color: "white" }}
    {...props}
  />
);

export default () => (
  <Nav>
    <Flex row justify="space-around">
      <HeaderNavLink to="/">ASK</HeaderNavLink>
      <HeaderNavLink to="/listings">HELP</HeaderNavLink>
    </Flex>
  </Nav>
);
