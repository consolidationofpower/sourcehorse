import React from "react";
import styled, { keyframes } from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'initial'};

  ${props => props.flex ? `flex: ${props.flex};` : ''};
`

export const FixedAspectRatio = ({ children, w=1, h=1 }) => {
  const Wrapper = styled.div`
    width: 100%;
    padding-top: ${() => 100 * (h / w)}%;
    position: relative;
  `;

  const Inner = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  `

  return (
    <Wrapper>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  height: 2rem;
  width: 2rem;

  border-top: 3px solid currentColor;
  border-left: 3px solid currentColor;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
  border-radius: 100%;

  animation: ${spin} 1s infinite;
`
