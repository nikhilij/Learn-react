import {useState} from 'react';
import './index.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App(){
  return(
    <>
    <Accordion data={faqs}/>
    </>
  )
}

function Accordion({data}){
  return(
    <>
     <div className='accordion'>
     {data.map((el,i)=>(
        <AccordionItem key={el.title} num={i} title={el.title} text = {el.text}    />
      ))}
     </div>
    </>
  )
}

function AccordionItem({num,title,text}){

  const [isOpen,setOpen] = useState(false);
  
  function handleToggle(){
    setOpen((isOpen)=>!isOpen);
  }

  return(
    <>
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <div className="number">{num<9? `0${num+1}`:`${num+1}`}</div>
        <p className="title">{title}</p>
        <p className="icon">{isOpen?`-`:`+`}</p>
        {isOpen && <div className='content-box'>{text}</div>}
      </div>
    </>
  )
}

export default App;