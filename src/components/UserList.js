'Use strict'

import React from 'react';

const UserList = (props) => {
  const users = props.users;
  const { isLoading } = props;
  
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
  )
}

export default UserList;