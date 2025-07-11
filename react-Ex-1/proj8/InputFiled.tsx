import React from 'react';

const InputLogger: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
    </div>
  );
};

export default InputLogger;
