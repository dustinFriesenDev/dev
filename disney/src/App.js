import './App.css';
import placeholder from './components/placeholder.jpg';
import princesses from './princessQuestions.json';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const correctAnswer = () => {
    const oc = document.getElementById("option-container");
    const answer = document.getElementById("answer");

    oc.style.display = "none";
    answer.style.display = "block";
  }

  const nextQuestion = () => {
    setCounter(counter + 1); 
  }

  // TODO: display one object at a time and when the button next is clicked, add one to the counter and display corresponding object.
  //TODO: if wrong answer selected box shakes, disables, and fades
  //TODO: when correct answer is selected "option" div disappeares and "answer" div appears. 

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
          <div className='answer' id="answer">
          <h3>Disney Princess Name</h3>
          {/* Working on creating a border layer to make the image an oval without having to alter the image. */}
          {/* <div className='border'></div> */}
          <img src={placeholder} alt="princess"/>
          <p className='option btn-next' id="btnNext" onClick={nextQuestion}>Next</p>
        </div> 

        </div>
      )
    }
  });


  return (
    <div className="App">
      <header className="App-header">
        <div>Disney Princess Quiz</div>
      </header>
      <div className='main-container'>
        {princessList}
        <div className='answer' id="answer">
          <h3>Disney Princess Name</h3>
          {/* Working on creating a border layer to make the image an oval without having to alter the image. */}
          {/* <div className='border'></div> */}
          <img src={placeholder} alt="princess"/>
          <p className='option btn-next' id="btnNext">Next</p>
        </div>  
      </div>
      

    </div>
  );
}

export default App;
