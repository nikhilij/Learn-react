// App.js file for the previous work where we learn about state 
import './index.css';
import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setSteps] = useState(1);
  const [isOpen,setOpen] = useState(true);

  function handlePrevious() {
    //if(step>1)
    setSteps((s)=>s-1);
  }

  function handleNext() {
    // if(step<3)
    setSteps((s)=>s+1);
  }

  return (
    <>
      <div>
        <button className='close' onClick={()=>setOpen((is)=>!is)}>&times;</button>
      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step>=1?'active':''}>1</div>
          <div className={step>=2?'active':''}>2</div>
          <div className={step>=3?'active':''}>3</div>
        </div>
        <p className="message">
          Step {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button 
            onClick={handlePrevious} 
            style={{ backgroundColor: '#7950f2', color: '#fff' }} 
            disabled={step === 1}
          >
            Previous
          </button>
          <button 
            onClick={handleNext} 
            style={{ backgroundColor: '#7950f2', color: '#fff' }} 
            disabled={step === messages.length}
          >
            Next
          </button>
        </div>
      </div>
      )}
      </div>
    </>
  );
}

export default App;
