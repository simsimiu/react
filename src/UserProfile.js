import React from 'react';

function UserProfile({ name, age, job }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Tuổi: {age}</p>
      <p>Nghề nghiệp: {job}</p>
    </div>
  );
}

export default UserProfile;
