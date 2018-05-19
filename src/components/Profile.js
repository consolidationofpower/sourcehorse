import React from "react"
import styled from "styled-components"
import { Flex, FixedAspectRatio } from "../elements";

const ProfileWrapper = styled.div`
  padding: ${props => props.theme.spacing};
  
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.secondary.main};
  
  font-size: 1.4rem;

  h3 {
    font-size: 1.4em;
  }

  p {
    color: ${props => props.theme.secondary.dark};
  }

  .small {
    margin-top: 0.6rem;
    font-size: 0.8em;
  }
`;

const ProfilePicture = styled.div`
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.theme.secondary.dark};
`;

const Star = ({ active }) =>
  <span className="fa fa-star small" style={{ color: active ? "orange" : "initial" }} />;

const Stars = ({ rating }) => 
  <Flex row justify="space-between">
    {[1, 2, 3, 4, 5].map(i => <Star key={i} active={i <= rating} />)}
  </Flex>

const user = {
  name: 'Johnny Anyman',
  school: 'University of Auckland',
  balance: 20,
  rating: 4
}

export default () => (
  <ProfileWrapper>
    <Flex row>
      <Flex flex={3} justify="space-between" style={{ paddingRight: '1rem' }}>
        <FixedAspectRatio>
          <ProfilePicture />
        </FixedAspectRatio>

        <Stars rating={user.rating} />
      </Flex>

      <Flex flex={9} justify="space-between">
        <div>
          <h3>{user.name}</h3>
          <p>{user.school}</p>
        </div>
        <p className="small">${user.balance}</p>
      </Flex>
    </Flex>
  </ProfileWrapper>
);