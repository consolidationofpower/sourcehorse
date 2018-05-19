import React from "react";
import styled from "styled-components";

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