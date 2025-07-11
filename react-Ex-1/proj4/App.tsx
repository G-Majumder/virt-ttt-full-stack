// App.tsx
import React, {useState} from 'react';
import Counter from './Counter';
import Welcome from './Welcome';

function App(){
  const [name, setName] = useState('Goutam'); //default value
  return(
    <div style={{textAlign: 'center', marginTop : '50px'}}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Type your name:
      </label>
      <input type ='text' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)}/>
      
      <Welcome name={name}/>
      <h1 style={{backgroundColor: 'lightgreen'}}> Counter App :</h1>
      <Counter />
    </div>
  )
}

export default App;
