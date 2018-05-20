import React from "react";
import styled from "styled-components";
import api from "../api";
import { Spinner } from "../elements";

const FormSpinner = Spinner.extend`
  position: absolute;
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  transform: translate(-50%, -50%);
`

const InputGroup = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: ${props => (props.wraps ? "wrap" : "initial")};

  background-color: white;

  &:not(:last-of-type) {
    border-bottom: thin solid ${props => props.theme.secondary.dark};
  }

  label {
    white-space: nowrap;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
  }

  input {
    margin-left: ${props => props.theme.spacing};
  }

  input[type="text"] {
    text-align: right;
    flex: 1;
  }

  input[type="number"] {
    width: 6rem;
  }

  textarea {
    width: 100%;
    padding: 0;
    margin-top: ${props => props.theme.spacing};
  }
`;

const SubmitButton = styled.input`
  display: block;
  width: 100%;
  padding: ${props => props.theme.spacing};
  text-align: center;
  border: none;
  background: ${props => props.theme.gradient};
  font-size: 1.4rem;
  color: inherit;
`;

const SubmitWrapper = styled.div`
  color: ${props => props.theme.secondary.main};
  position: relative;
`;

const initialState = {
  title: "",
  description: "",
  reward: 5,
  min_sources: 1
};

export default class JobForm extends React.Component {
  state = initialState;

  render() {
    const isLoading = this.state.loadState === api.states.LOADING;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup>
          <label>TITLE</label>
          <input
            name="title"
            placeholder="The title of the job"
            type="text"
            value={this.state.title}
            required
            onChange={this.handleInputChange}
            disabled={isLoading}
          />
        </InputGroup>

        <InputGroup wraps>
          <label>DESCRIPTION</label>
          <textarea
            name="description"
            placeholder="Briefly describe the job"
            type="text"
            value={this.state.description}
            required
            onChange={this.handleInputChange}
            rows={4}
            disabled={isLoading}
          />
        </InputGroup>

        <InputGroup>
          <label>MIN SOURCES</label>
          <input
            name="min_sources"
            type="number"
            value={this.state.min_sources}
            required
            onChange={this.handleInputChange}
            disabled={isLoading}
          />
        </InputGroup>

        <InputGroup>
          <label>REWARD ($)</label>
          <input
            name="reward"
            type="number"
            value={this.state.reward}
            required
            onChange={this.handleInputChange}
            disabled={isLoading}
          />
        </InputGroup>

        <SubmitWrapper>
          <SubmitButton
            type="submit"
            value={isLoading ? "" : "SUBMIT JOB"}
            style={{ WebkitBorderRadius: 0 }}
            disabled={isLoading}
          />
          {isLoading && <FormSpinner />}
        </SubmitWrapper>
      </form>
    );
  }

  handleSubmit = formEvent => {
    formEvent.preventDefault();

    this.setState({ loadState: api.states.LOADING });
    const job = this.getJobFromState();
    api
      .submitJob(job)
      .then(res => {
        this.setState({ loadState: api.states.LOADED });
        console.log(res)
        this.props.onAfterLoad(res);
        window.dispatchEvent(new CustomEvent("NEW_JOBS"));
      })
      .catch(err => {
        this.setState({ loadState: api.states.ERROR });
      });
  };

  handleInputChange = ev => {
    let value = ev.target.value;
    if (value && ["reward", "min_sources"].includes(ev.target.name)) {
      value = Math.max(0, value);
    }

    this.setState({ [ev.target.name]: value });
  };

  getJobFromState = () => {
    const { loadState, ...job } = this.state;
    return {
      ...job,
      min_rating: 0,
      contract_duration: 3000,
      duration: 15000,
      owner_id: this.props.user.user_id
    }
  };
}
