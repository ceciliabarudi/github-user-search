'Use strict'

import React, { Component } from 'react';

class UserList extends Component {

  render() {
    const users = this.props.users;
    const { isLoading } = this.props.isLoading;

    if (isLoading) {
      return <div>Loading...</div>
    }
    if (!users.length) {
      return <div>No results found</div>
    }
    return (
      <div>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.login}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;