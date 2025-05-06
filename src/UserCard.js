import React from 'react';

function UserCard({ name, age, email }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <h2>{name}</h2>
        <p>Tuổi: {age}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  

export default UserCard;