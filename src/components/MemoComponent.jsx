import React, { useMemo, useState } from 'react';

function MemoComponent() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Expensive calculation (simulated)
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + total;
  }, [total]); // only recalculates when total changes

  return (
    <div>
      <h1>Total: {total}</h1>
      <h1>Count: {count}</h1>
      <h2>Expensive Result: {expensiveCalculation}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
      <button onClick={() => setTotal(prev => prev + 1)}>Increment Total</button>
    </div>
  );
}

export default MemoComponent;
