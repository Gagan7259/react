import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("object")
  return (
    <div>
      <button>count-{count}</button>
      <br />
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        icrement
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {    
          setCount((c) => c + 5);
        }}
      >
        Increment 5
      </button>
      <Child />
    </div>
  );
};

export default Parent;
