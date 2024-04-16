import './App.css';
import placeholder from './components/placeholder.jpg';
import princesses from './princessQuestions.json';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const [answ, setAnsw] = useState("");

  const correctAnswer = (e) => {
    const oc = document.getElementById("option-container");
    const answer = document.getElementById("answer");
    const option = e.target;
    const correct = document.getElementById("correct");
    if(option.innerText === correct.innerText){
      oc.style.display = "none";
      answer.style.display = "block";
    } else {
      if(option.id !== "option-container"){
        option.style.backgroundColor = "#BFF5FD";
        option.style.opacity = "0.5";
        option.classList.add("add-shake");
      }
    }
  }

  const nextQuestion = () => {
    setCounter(counter + 1); 
  }

  const princessList = princesses.map((e) => {

    if(counter === e.id){
      return (
        <div key={e.id}>
          <div className="question" id="question">{e.id}. {e.question}</div>
          <div className='option-container' id="option-container" onClick={correctAnswer}>
            <p className='option o1' id="o1">{e.o1}</p>
            <p className='option o2' id="o2">{e.o2}</p>
            <p className='option o3' id="o3">{e.o3}</p>
            <p className='option o4' id="o4">{e.o4}</p>
          </div>
          {/* Answer */}
          <div className='answer' id="answer">
          <h3>{e.name}</h3>
          <p style={{display: "none"}} id="correct">{e.answer}</p>
          {/* Working on creating a border layer to make the image an oval without having to alter the image. */}
          {/* <div className='border'></div> */}
          <img src={placeholder} alt="princess"/>
          <p className='option btn-next' id="btnNext" onClick={nextQuestion}>Next</p>
        </div>
        </div>
      )
    } 
  });

  function endPage() {
    if (counter > princesses.length){
      return (
        <div>
          <h3>Congratulations!! You finished the quiz.</h3>
          <p>Click the button below to start again.</p>
          <p className='option btn-next' id="btnAgain" onClick={startOver}>Start Over</p>
        </div>
      )
    }
  }

  const startOver = () => {
    setCounter(1);
  }

//HTML Return Statement
  return (
    <div className="App">
      <header className="App-header">
        <div>Disney Princess Quiz</div>
      </header>
      <div className='main-container'>
        {princessList}
        {endPage()}
        {/* <div className='answer' id="answer">
          <h3>Disney Princess Name</h3> */}
          {/* Working on creating a border layer to make the image an oval without having to alter the image. */}
          {/* <div className='border'></div> */}
          {/* <img src={placeholder} alt="princess"/>
          <p className='option btn-next' id="btnNext">Next</p>
        </div>   */}
      </div>
      

    </div>
  );
}

export default App;
