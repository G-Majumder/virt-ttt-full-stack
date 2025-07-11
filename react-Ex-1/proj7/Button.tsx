import React from 'react';

const ClickButton: React.FC = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};

export default ClickButton;
