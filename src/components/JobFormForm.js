import React from 'react';

export default class JobFormForm extends React.Component {
  state={
    title:"",
    description:"",
    reward:0,
    min_sources:0,
  };

  render() {
    return <form onSubmit={this.handleSubmit}>
              <p>Title: </p><input name="title" type="text" value={this.state.title} required onChange={this.handleInputChange}/>
              <p>Description: </p><input name="description" type="text" value={this.state.description} required onChange={this.handleInputChange}/>
              <p>Reward</p><input name="reward" type="number" value={this.state.reward} required onChange={this.handleInputChange}/>
              <p>Number of sources</p><input name="min_sources" type="number" value={this.state.min_sources} required onChange={this.handleInputChange}/>

              <button>
                <p>Submit</p>
              </button>
            </form>
  }

  handleSubmit = (formEvent) => {
    formEvent.preventDefault();
    console.log(this.state);
  }

  handleInputChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value});
  }
}
