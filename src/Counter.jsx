import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newNum = count + 1;
    setCount(newNum);
  };
  const handleReduce = () => {
    const newNum = count - 1;
    setCount(newNum);
  };
  return (
    <div style={{ border: "2px solid yellow", padding: "10px" }}>
      <h2>Counter :{count}</h2>
      <button onClick={handleAdd}>Add Count</button>
      <button onClick={handleReduce}> Reduce</button>
    </div>
  );
}
