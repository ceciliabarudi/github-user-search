import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Search GithHub Users</h1>
        <Form></Form>
      </div>
    );
  }
}

export default App;
