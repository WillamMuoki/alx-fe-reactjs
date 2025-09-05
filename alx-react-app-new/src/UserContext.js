import { createContext } from 'react';

// Create UserContext
const UserContext = createContext();

export default UserContext;


import UserDetails from './UserDetails';

function UserInfo() {
  return <UserDetails />;
}

export default UserInfo;
