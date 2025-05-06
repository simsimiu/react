import React, { useState, useMemo } from 'react';

//Tính Fibonacci lớn và tối ưu bằng useMemo

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ExpensiveCalc() {
  const [num, setNum] = useState(30);
  const [other, setOther] = useState(false);

  const fib = useMemo(() => {
    return fibonacci(num);
  }, [num]);

  return (
    <div>
      <h3>Fibonacci của {num} là: {fib}</h3>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => setOther(!other)}>Trigger re-render</button>
    </div>
  );
}

export default ExpensiveCalc;