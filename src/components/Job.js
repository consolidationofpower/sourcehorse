import React from "react";
import styled from "styled-components";
import { Flex } from "../elements";

const JobWrapper = styled.div`
  margin: ${props => props.theme.spacing};
  padding: ${props => props.theme.spacing};
  border: thin solid ${props => props.theme.secondary.dark};
  border-radius: 6px;
  box-shadow: ${props => props.theme.shadow};
  position: relative;
  overflow: hidden;
`;

const Progress = styled.progress`
  height: 6px;
  position: absolute;
  bottom: -1px;
  left: -1px;
  border: 0px solid;
  width: calc(100% + 2px);

  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: #eee;
  }

  &::-webkit-progress-value {
    background: ${props => props.theme.gradient};
  }
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-top: 12px;
`;

class FakeProgress extends React.Component {
  state = { value: 100 };

  componentDidMount() {
    this.interval = setInterval(this.tick, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (Math.random() < 0.25) {
      this.setState(state => ({ value: state.value - 1 }));
    }
  };

  render() {
    return (
      <Progress max={100} value={this.state.value}>
        {this.state.value}%
      </Progress>
    );
  }
}

export default ({ job }) => (
  <JobWrapper>
    <Flex justify="space-between" row>
      <span>{job.title}</span>
      <span style={{ color: "#CCC" }}>${job.reward}0</span>
    </Flex>

    <P>{job.description}</P>

    <FakeProgress />
  </JobWrapper>
);
