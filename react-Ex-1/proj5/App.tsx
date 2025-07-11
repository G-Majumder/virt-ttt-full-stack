import React, { useState } from 'react';
import UserCard from './UseCard';

function App() {
  const [name, setName] = useState('Goutam');
  const [age, setAge] = useState('38');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Enter User Data</label> <br />
      
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> <br/>

      <input
        type="number"
        placeholder="Your Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      /> <br/>

      {name && age && (
        <UserCard name={name} age={Number(age)} />
      )}
    </div>
  );
}

export default App;
