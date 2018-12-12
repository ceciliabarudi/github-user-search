'Use strict';

import React, { Component } from 'react';

class Form extends Component {
  state = {
    username: '',
  }

  handleOnChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} 
          value={this.state.username} placeholder="write username here" />
          <input type="submit"/>
        </form>
    );
  }
}

export default Form;