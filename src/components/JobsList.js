import React from "react";
import styled from "styled-components";
import api from "../api";
import Job from "./Job";

const P = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  text-align: center;
  color: ${props => props.theme.secondary.dark};
`;

const NoJobsMessage = () => <P>You don't have any jobs</P>;

export default class JobsList extends React.Component {
  state = {};

  componentDidMount() {
    this.getJobs();
    window.addEventListener("NEW_JOBS", this.getJobs);
  }

  componentWillUnmount() {
    window.removeEventListener(this.getJobs);
  }

  getJobs = () => {
    this.setState({ loadState: api.states.LOADING });
    api.getUserJobs(this.props.user.user_id)
      .then(jobs => {
        console.log(jobs);
        this.setState({ jobs, loadState: api.states.LOADED });
      })
      .catch(err => {
        this.setState({ loadState: api.states.ERROR });
      })
  }

  render() {
    if (this.state.loadState === api.states.LOADED && this.state.jobs.length > 0) {
      return this.renderJobs();
    }

    return <NoJobsMessage />;
  }

  renderJobs() {
    return (
      <React.Fragment>
        {this.state.jobs.map(({job}) => <Job key={job.id} job={job} />)}
      </React.Fragment>
    )
  }
}
