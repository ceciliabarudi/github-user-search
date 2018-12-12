import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import Form from './components/Form';
import githubService from './lib/githubService';


class App extends Component {
  state = {
    users: [],
    isLoading: false,
  }

  handleOnSubmit = (username) => {
    this.setState({
      isLoading: true,
    })
    githubService.getUsersBySearchTerm(username)
      .then((data) => {
        this.setState({
          users: data.items,
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
        <Form onSubmit={this.handleOnSubmit}/>
        <UserList users={this.state.users} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default App;