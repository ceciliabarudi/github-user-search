import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import axios from 'axios'

class App extends Component {
  state = {
    username: '',
    users: [],
    //filterword: '',
    isLoading: true
  }

  handleOnChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.state.username;

    axios.get(`https://api.github.com/search/users?q=${username}+type:user+in:login`)
      .then((response) => {
        console.log(response.data.items)
        this.setState({
          users: response.data.items,
          //filterword: username,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
 
    return (
      
      <div className="App">
        <h1>Search GithHub Users</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.username} placeholder="write username here" />
          <input type="submit"/>
        </form>
        <UserList users={this.state.users} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default App;