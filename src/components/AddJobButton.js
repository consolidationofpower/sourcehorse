import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: ${props => props.theme.spacing};
  bottom: ${props => props.theme.spacing};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.5rem;
  width: 4.5rem;

  background: ${props => props.theme.gradient};
  border-radius: 100%;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
`;

const CrossArm = styled.div`
  position: absolute;
  width: 40%;
  height: 3px;

  background-color: ${props => props.theme.secondary.main};

  transform: rotate(${props => (props.rotate ? 90 : 0)}deg);
`;

const Cross = () => (
  <React.Fragment>
    <CrossArm />
    <CrossArm rotate />
  </React.Fragment>
);

export default () => (
  <Button>
    <Cross />
  </Button>
);
