import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import AddJobButton from "../components/AddJobButton";

const P = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${props => props.theme.secondary.dark};
`

export default () =>
  <React.Fragment>
    <Profile />

    <P>You don't have any jobs</P>

    <AddJobButton />
  </React.Fragment>
