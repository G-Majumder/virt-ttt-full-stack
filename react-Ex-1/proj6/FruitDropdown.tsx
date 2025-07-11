import React, { useState } from 'react';

const FruitDropdown: React.FC = () => {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
  const [selectedFruit, setSelectedFruit] = useState('');

  return (
    <div>
      <h3>Select a Fruit</h3>

      <select
        value={selectedFruit}
        onChange={(e) => setSelectedFruit(e.target.value)}
      >
        <option value="">--Choose a fruit--</option>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>

      <label style={{ display: 'block', marginTop: '10px' }}>
        You Have Selected: <strong>{selectedFruit || 'None'}</strong>
      </label>
    </div>
  );
};

export default FruitDropdown;
