import React, { useState } from 'react';

const LiveTextDisplay: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return(<div>
    <label>Type something: </label>
    <input type="text" value={text} onChange={handleChange} />
    <p>You typed: {text}</p>
  </div>);

};

export default LiveTextDisplay;
