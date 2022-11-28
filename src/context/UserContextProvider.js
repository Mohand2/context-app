import React, { useState } from 'react';
import userContext from './userContext';

function UserContextProvider(props) {
  const [user, setUser] = useState('user');

  const context = {
    user,
    setUser,
  };

  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
