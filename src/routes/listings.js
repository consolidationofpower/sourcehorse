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
        <h1>Listings</h1>
        <p>dkjncjkebcjhb</p>
        <AnswerListing>
          {this.state.jobs.map(job => <AnswerJob key={job.id} {...job} />)}
        </AnswerListing>
      </React.Fragment>
    );
  }
}

const AnswerJob = (props) => (
  <React.Fragment>
    <AnswerJobCard>
      <AnswerJobTitle>{props.title || 'Untitled'}</AnswerJobTitle>
    </AnswerJobCard>
  </React.Fragment>
);

const AnswerJobTitle = styled.p`
`;

const AnswerListing = styled.div`
  background: ${props => props.theme.secondary.dark};
  padding-top: 10px;
`;

const AnswerJobCard = styled.div`
  background: ${props => props.theme.secondary.main};
  margin-top: 10px;
  padding: 25px;
`;