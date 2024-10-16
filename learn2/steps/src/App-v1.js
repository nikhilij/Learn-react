// App.js file for the previous work where we learn about state
import "./index.css";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setSteps] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setSteps((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setSteps((s) => s + 1);
  }

  return (
    <>
      <div>
        <button className="close" onClick={() => setOpen((is) => !is)}>
          &times;
        </button>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step} : {messages[step - 1]}
            </p>
            <div className="buttons">
              <Button
                onClick={handlePrevious}
                bgColor="#7950f2"
                txtcolor="#fff"
              >
                <span>👈</span>Previous
              </Button>
              <Button
                onClick={handleNext}
                bgColor="#7950f2"
                txtcolor="#fff"
              >
                Next <span>👉</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function Button({ txtcolor, bgColor, onClick, children}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: txtcolor }}
    >
      {children}
    </button>
  );
}

export default App;
