import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import JobForm from "../components/JobForm";

const P = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${props => props.theme.secondary.dark};
`;

const user = {
  name: "Johnny Anyman",
  school: "University of Auckland",
  balance: 20,
  rating: 4
};

export default () => (
  <React.Fragment>
    <Profile user={user} />

    <P>You don't have any jobs</P>

    <JobForm />
  </React.Fragment>
);
