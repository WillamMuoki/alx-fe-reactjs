 const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default UserProfile;
