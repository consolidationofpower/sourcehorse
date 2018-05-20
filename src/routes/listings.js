import React from 'react';
import styled from "styled-components";
import api from '../api';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    api.getJobs().then(result => {
      console.log('result', result);
      this.setState({
        jobs: result.jobs
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <ListingHeader>
          <h1>Listings</h1>
        </ListingHeader>
        <AnswerListing>
          {this.state.jobs.map(job => <AnswerJob key={job.id} {...job} />)}
        </AnswerListing>
      </React.Fragment>
    );
  }
}

function toCurrency(num) {
  let roundedNum = Math.round(num * 10) / 10;
  return `${roundedNum}`
}

const AnswerJob = (props) => (
  <AnswerJobCard>
    <AnswerJobMain>
      <AnswerJobLeft>
        <AnswerJobTitle>{props.title || 'Untitled'}</AnswerJobTitle>
        <AnswerJobSources>{props.min_sources || 1} Sources</AnswerJobSources>
      </AnswerJobLeft>
      <AnswerJobReward>${toCurrency(props.reward) || '0.0'}0</AnswerJobReward>
    </AnswerJobMain>
    <AnswerJobExtra>
      hi there extra extra
    </AnswerJobExtra>
  </AnswerJobCard>
);

const ListingHeader = styled.div`
  background: ${props => props.theme.gradient};
  color: white;
  padding: 15px;
`;

const AnswerListing = styled.div`
  background: ${props => props.theme.secondary.dark};
  padding-top: 10px;
`;

const AnswerJobCard = styled.div`
  background: ${props => props.theme.secondary.main};
  margin-top: 10px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerJobLeft = styled.div`
  display: flex;
  flex-direction: column;
`

const AnswerJobTitle = styled.p`
  font-size: 22px;
`;

const AnswerJobSources = styled.p`
`;

const AnswerJobReward = styled.p`
  font-size: 32px;
`;

const AnswerJobMain = styled.div`
`

const AnswerJobExtra = () => `
`