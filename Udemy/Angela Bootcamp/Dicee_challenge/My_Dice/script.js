// show two dice on load
//show random dice on reload
//compare the values and declare a winner
//function to random generate a value and save in a variable. 
//function2 to random generate a value and save in a variable
//function3 (compare) function1 to function2 to find highest value. 
//(if) based on value display an image dice. 
const playerDice1 = document.querySelector('[data-image1]');
const playerDice2 = document.querySelector('[data-image2]');
const winner = document.querySelector('[data-winner]');
let diceValue1 = Math.floor(Math.random() * 6 + 1);
let diceValue2 = Math.floor(Math.random() * 6 + 1);
console.log(diceValue1, diceValue2)
console.log(winner.innerHTML)
//function to compare diceValue1 and diceValue2
function compareDice() {
    if (diceValue1 === diceValue2){
        winner.innerHTML = "Tie Game! Roll Again"
    } else if (diceValue1 > diceValue2) {
        winner.innerHTML = "Player 1 Wins"
    } else if (diceValue1 < diceValue2){
        winner.innerHTML = "Player 2 Wins"
    }
}

function diceImage() {
    switch(diceValue1){
        case 1: 
            playerDice1.src = "./images/dice1.png";
            break;
        case 2: 
            playerDice1.src = "./images/dice2.png";
            break;
        case 3: 
            playerDice1.src = "./images/dice3.png";
            break;
        case 4: 
            playerDice1.src = "./images/dice4.png";
            break;
        case 5: 
            playerDice1.src = "./images/dice5.png";
            break;
        case 6: 
            playerDice1.src = "./images/dice6.png";
            break;
    }
    console.log(diceValue1)
    switch(diceValue2){
        case 1: 
            playerDice2.src = "./images/dice1.png";
            break;
        case 2: 
            playerDice2.src = "./images/dice2.png";
            break;
        case 3: 
            playerDice2.src = "./images/dice3.png";
            break;
        case 4: 
            playerDice2.src = "./images/dice4.png";
            break;
        case 5: 
            playerDice2.src = "./images/dice5.png";
            break;
        case 6: 
            playerDice2.src = "./images/dice6.png";
            break;
    }
    console.log(diceValue2)
}

document.location.reload = compareDice(); diceImage();
console.log(winner.innerHTML)


