// BUTTON TOGGLE BETWEEN BASKETBALL AND BASEBALL SCOREBOARDS
let basketContainer = document.getElementById("basketballBoard")

toggleBoard();
function toggleBoard() {
    let sportBoard = document.querySelector(".sport-board")
    let basketContainer = document.getElementById("basketballBoard")
    let baseContainer = document.getElementById("baseballBoard")
   
    if (baseContainer.style.display === "none"){
        basketContainer.style.display = "none"
        baseContainer.style.display = "flex" 
        
    } else {
        basketContainer.style.display = "flex"
        baseContainer.style.display = "none"
        sportBoard.innerHTML = "Baseball Scoreboard"
        sportBoard.style.fontFamily = "Verdana,sans-serif";
    }
}


// BASKETBALL SCOREBOARD
let homeTotal = 0
let guestTotal = 0


const homeDisplay = document.getElementById("homeScore")
const guestDisplay = document.getElementById("guestScore")

// FUNCTION TO ADD VALUE TO DISPLAY OF SCORE
basketContainer.addEventListener('click', function(e){
    const target = e.target
    const homePts = target.dataset.homePts
    const guestPts = target.dataset.guestPts

    if (homePts) {
        homeTotal += +homePts
        homeDisplay.innerText = homeTotal 
    } else if (guestPts){
        guestTotal += +guestPts
        guestDisplay.innerText = guestTotal 
    }
    highlight()
}) 

// FUNCTION TO HIGHLIGHT CURRENT WINNING TEAM
function highlight() {
    homeDisplay.classList.toggle("highlighter", homeTotal > guestTotal),
    guestDisplay.classList.toggle("highlighter", homeTotal < guestTotal)
}

// RESET SCORE
let reset = document.querySelector(".reset")
reset.addEventListener('click', function(){
    homeTotal = 0;
    homeDisplay.innerText = homeTotal
    guestTotal = 0;
    guestDisplay.innerText = guestTotal
})

//BASEBALL SCOREBOARD
const allInningBoxes = document.querySelectorAll('.inning-score')

 for (let i = 0; i < allInningBoxes.length; i++) {
     allInningBoxes[i].addEventListener('click', function() {
          allInningBoxes[i].textContent++
          if (allInningBoxes[i].parentElement.classList.contains('base-home')) {
              document.querySelector('#home-score').textContent++
          } else {
              document.querySelector('#guest-score').textContent++
          }
     })
 }

//  BALL/STRIKES/OUT BUTTON/DISPLAY UPDATES
const bso = document.querySelectorAll('.offense-btn')
for (let i = 0; i < bso.length; i++) {
    bso[i].addEventListener('click', function(){
        if(bso[i].parentElement.classList.contains('balls')) {
            if(document.getElementById('balls-display').textContent <= 2) {
                document.getElementById('balls-display').textContent++
            } else {
                document.getElementById('balls-display').textContent = 0
            }
        } else if (bso[i].parentElement.classList.contains('strikes')) {
            if (document.getElementById('strikes-display').textContent <= 1) {
                document.getElementById('strikes-display').textContent++
            } else {
                document.getElementById('strikes-display').textContent = 0
            }
        } else {
            if (document.getElementById('outs-display').textContent <= 1) {
                document.getElementById('outs-display').textContent++
            } else {
                document.getElementById('outs-display').textContent = 0
            }
        }
    })
}

//RESET BASEBALL SCOREBOARD
const baseReset = document.querySelector('#reset')
const resetDisplay = document.querySelectorAll('.reset-display') 
baseReset.addEventListener('click', function() {
    for (let i = 0; i < resetDisplay.length; i++) {
        resetDisplay[i].textContent = 0
    }
})