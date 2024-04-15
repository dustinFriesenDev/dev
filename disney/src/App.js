import logo from './logo.svg';
import './App.css';
import placeholder from './components/placeholder.jpg';

function App() {

  const correctAnswer = () => {
    const oc = document.getElementById("option-container");
    const answer = document.getElementById("answer");

    oc.style.display = "none";
    answer.style.display = "block";
  }

  //TODO: map Json to display the question, options, and answer in the correct order.
  // TODO: display one object at a time and when the button next is clicked, add one to the counter and display corresponding object.
  //TODO: if wrong answer selected box shakes, disables, and fades
  //TODO: when correct answer is selected "option" div disappeares and "answer" div appears. 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Disney Princess Quiz</h1>
      </header>
      <div className='main-container'>
        <div className="question" id="question">This is the question. this is a questionsupering a s</div>
        <div className='option-container' id="option-container" onClick={correctAnswer}>
          <p className='option o1' id="o1">something1</p>
          <p className='option o2' id="o2">something2</p>
          <p className='option o3' id="o3">somthing3</p>
          <p className='option o4' id="o4">something4</p>
        </div>
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
