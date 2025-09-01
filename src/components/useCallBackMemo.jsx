import React, { useCallback, useState } from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function UseCallBackMemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  },[]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child handleClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseCallBackMemo
