'Use strict'

import React, { Component } from 'react';
import axios from 'axios'

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
    event.preventDefault()
    console.log('i was clicked')
  }

  render() {
    const { username } = this.state.username;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={username} placeholder="write username here" />
          <button type="submit" value="submit">Search!</button>
        </form>
      </div>
    );
  }
}

export default Form;