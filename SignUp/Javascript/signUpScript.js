let uName = document.getElementById("name").value;
const nameResponse = [
  "You got to put something in.",
  "Really? I wouldn't have guessed. That's...cool.",
  "... that's cute.",
  "WHADDUP!",
  "I haven't seen it spelt like that before."
]

contactResponse = [
  "Here we go...I don't think this is the best way. I'm screaming and I think the police are coming. I'm going to stop.",
  "This sounds like fun! Let me go climb a mountain.",
  "I'll look up that the moon and whisper your name in hopes you're looking back thinking of me.",
  "You want me to contact you all three ways? You're demanding a lot!"
]

const phoneNumbers = [
  "867-5309",
  "555-555-5555",
  "1800-800-800",
  "911",
  "811",
  "0"
]

const phoneResponse = [
  "That's not a real number. What is it really?",
  "What a second...that's my number! I guess I can call you anytime, then.",
  "You should be getting a text from me soon. ;)",
  "I knew it! I tried calling you last week and you didn't pick up."
]


function randomIndexRoundDown(max) {
  return Math.floor(Math.random() * max);
}
function randomIndexExcludeZero(max){
  let round = Math.ceil(Math.random() * max);
  if(round == max){
    return round - 1;
  } else {
    return round;
  }
   
}

let selectId = document.getElementById("phone");
window.onload = function dropdownPhoneNumber(){
  for (let i = 0; i <  phoneNumbers.length; i ++){
    let optn = phoneNumbers[i];
    let el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    selectId.appendChild(el);
  }
}

signUp(); //first call to ready the buttons so the buttons don't take two clicks. 
function signUp() { // show the form and hide the sign up button.
  var x = document.getElementById("signUp");
  var y = document.getElementById("btnStart");
  var blur = document.getElementById("blur");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    blur.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

funForm(); //first call to ready the buttons so the buttons don't take two clicks.
function funForm() { //hide the form and show the results.
  var x = document.getElementById("results");
  var y = document.getElementById("signUp");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

  function userAnswers() {
    //Name
    uName = document.getElementById("name").value;
    let nameResults = document.getElementById("resultsName");
    if (uName == "") {
      nameResults.innerHTML = nameResponse[0];
    } else {
      nameResults.innerHTML = `${uName}` + ": " + nameResponse[randomIndexExcludeZero(nameResponse.length)];
    } 
  // Contact
    let contactCheck = document.getElementsByName("contact")
    let contactResults = document.getElementById("resultsContact");
    for (let i = 0, length = contactCheck.length; i < length; i++) {
      if (contactCheck[i].checked) {
        if (contactCheck[i].id == "scream"){
          contactResults.innerHTML = `${contactCheck[i].value}` + ": " + contactResponse[0];
        } else if(contactCheck[i].id == "yodel") {
          contactResults.innerHTML = `${contactCheck[i].value}` + ": " + contactResponse[1];
        } else if(contactCheck[i].id == "sayName") {
          contactResults.innerHTML = `${contactCheck[i].value}` + ": " + contactResponse[2];    
        } else if (contactCheck[i].id = "noInput" ) {
          contactResults.innerHTML = contactResponse[3];
        }
      }
    }
  //Phone
    let uPhone = document.getElementById("phone");
    let selectedPhone = uPhone.options[uPhone.selectedIndex].innerHTML;
    let selectedValue = uPhone.value;
    let phoneResults = document.getElementById("resultsPhone");
    if (selectedValue == "") {
      phoneResults.innerHTML = "What's your number? I've been trying to call you. You won the lottery!"
    } else if (selectedPhone === "867-5309"){
      phoneResults.innerHTML = `${selectedPhone}` + ": " + "I love that song! But I know that's not your number!"
    } else {
      phoneResults.innerHTML = `${selectedPhone}` + ": " + `${phoneResponse[randomIndexRoundDown(phoneResponse.length-1)]}`;
    }

  //Animal
    let uAnimal = document.getElementById("animal").value;
    let animalResults = document.getElementById("resultsAnimal");
    if (uAnimal == "") {
      animalResults.innerHTML = "My favorite animal is a monkey."
    } else {
      animalResults.innerHTML = `${uAnimal}` + ": It's okay to like imaginary creatures. More power to you!";
    }
  //Birthday
    let birthCheck = document.getElementsByName("birth")
    let birthResults = document.getElementById("resultsBirth");

    for (let i = 0, length = birthCheck.length; i < length; i++) {
      if (birthCheck[i].checked) {
        if (birthCheck[i].id == "past") {
          birthResults.innerHTML = `${birthCheck[i].value}` + ": (sigh) Me too. Nothing special.";
      } else if (birthCheck[i].id == "present"){
        birthResults.innerHTML = `${birthCheck[i].value}` + ": Wow! You're really smart for a baby. Well done.";
      } else if(birthCheck[i].id == "future") {
        birthResults.innerHTML = `${birthCheck[i].value}` + ": You're a time traveler?! Does this mean I'm my own grandpa?";
        } else if (birthCheck[i].id = "noInput" ) {
          birthResults.innerHTML = "How will I know when to send you a gift?"
        }
      }
    }
  }
backForm(); //first call to ready the buttons so the buttons don't take two clicks.
function backForm() { //show the form and hide the results.
  let x = document.getElementById("signUp");
  let y = document.getElementById("results");
  let z = document.getElementById("btnStart");
  if (x.style.display === "none" && z.style.display === "none" ) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

//Results page:
//grabbing answers from inputs, adding them togethers, and output them to results 
// var uName = document.getElementById("name");
// var userInput = uName.value;
// var response = document.getElementById("resultsName");
// response.innerHTML = `${userInput}` + ": That's a funny made up name! lol"; 