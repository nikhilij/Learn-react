// import logo from './logo.svg';
// import './App.css';

function App(){
  return(
    <>
      <div className="App">
        <Flashcards/>
      </div>
    </>
  )
}

const questions =[
  {
    id:3457,
    question:'what language is react based on?',
    answer:'javaScript'
  },
  {
    id:3458,
    question:'what is the main purpose of react?',
    answer:'building user interfaces'
  },
  {
    id:3459,
    question:'what is the name of the virtual dom in react?',
    answer:'react-dom'
  },
  
]

function Flashcards(){
  return(
    <>
      <div className="card-container">
        {questions.map((q)=><>{q.question}</>)}
      </div>
    </>
  )
}



export default App;
