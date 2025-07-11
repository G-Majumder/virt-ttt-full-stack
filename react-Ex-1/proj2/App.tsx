// App.tsx
import React from 'react';
import Welcome from './Welcome';
import Add from './Addition';

const App: React.FC = () => {
 /* return (
    <div>
      <Welcome name="Goutam" />
    </div>
  );
};*/
  return (
    <div>
      Welcome to the calculator
      <Add a = {10} b = {20}/>
    </div>
  );
};

export default App;
