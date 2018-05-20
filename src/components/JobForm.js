import React from "react";
import styled from "styled-components";
import api from "../api";

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
  color: ${props => props.theme.secondary.main};
  font-size: 1.4rem;
`;

export default class JobForm extends React.Component {
  state = {
    title: "",
    description: "",
    reward: 0,
    min_sources: 0
  };

  render(isLoading) {
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
          />
        </InputGroup>

        <SubmitButton
          type="submit"
          value="SUBMIT JOB"
          style={{ WebkitBorderRadius: 0 }}
        />
      </form>
    );
  }

  handleSubmit = formEvent => {
    formEvent.preventDefault();

    const job = this.getJobFromState();
    api
      .submitJob(job)
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  handleInputChange = ev => {
    let value = ev.target.value;
    if (value && ["reward", "min_sources"].includes(ev.target.name)) {
      value = Math.max(0, value);
    }

    this.setState({ [ev.target.name]: value });
  };

  getJobFromState = () => {
    return this.state;
  };
}
