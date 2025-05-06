import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Giá trị đếm: {count}</h2>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  );
}

export default Counter;
