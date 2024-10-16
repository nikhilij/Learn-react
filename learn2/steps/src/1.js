import React from "react";
import { useState } from "react";
import "./index.css"; // Import the stylesheet

function App() {
  return (
    <div className="contents">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate()+count);


  function handleStepInc() {
    setStep((s) => s + 1);
  }

  function handleStepDec() {
    setStep((s) => (s > 1 ? s - 1 : 1));
  }

  function handleCountInc() {
    setCount((c) => c + step);
  }

  function handleCountDec() {
    setCount((c) => c - step);
  }


  return (
    <>
      <div>
      {console.log(date)}
      <button onClick={handleStepDec}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleStepInc}>+</button>
      <br />
      <button onClick={handleCountDec}>-</button>
      <span>Count: {count}</span>
      <button onClick={handleCountInc}>+</button>
      </div>
      <div>
      {count === 0
        ? `Today Date is ${date.toDateString()}`
        : count > 0
        ? `${count} days from today is ${date.toDateString()}`
        : `${Math.abs(count)} days ago was ${date.toDateString()}`}
      </div>
      
    </>
  );
}

export default App;
