// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <ul>
          <Flashcards />
        </ul>
      </div>
    </>
  );
}

const questions = [
  {
    id: 3457,
    question: "what language is react based on?",
    answer: "javaScript",
  },
  {
    id: 3458,
    question: "what is the main purpose of react?",
    answer: "building user interfaces",
  },
  {
    id: 3459,
    question: "what is the name of the virtual dom in react?",
    answer: "react-dom",
  },
  {
    id: 3460,
    question: "what are components in react?",
    answer: "reusable pieces of UI",
  },
  {
    id: 3461,
    question: "what is JSX in React?",
    answer: "a syntax extension that allows mixing HTML with JavaScript",
  },
  {
    id: 3462,
    question: "what is the difference between state and props in react?",
    answer:
      "state is internal and managed by the component, props are external and passed to the component",
  },
];

function Flashcards() {
  const [selected, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selected ? id : null);
  }

  return (
    <>
      <div className="flashcards">
        {questions.map((q) => (
          <div key={q.id} onClick={()=>handleClick(q.id)} className={q.id === selected ? "selected" : ""}>
            <p>{q.id === selected ? q.answer : q.question}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
