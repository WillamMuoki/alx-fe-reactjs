function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '14px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: 'darkslategray' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;

import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;



