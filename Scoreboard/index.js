let homeTotal = 0
let guestTotal = 0

const container = document.querySelector(".scrimba-container")
const homeDisplay = document.getElementById("homeScore")
const guestDisplay = document.getElementById("guestScore")

container.addEventListener('click', function(e){
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

function highlight() {
    homeDisplay.classList.toggle("highlighter", homeTotal > guestTotal),
    guestDisplay.classList.toggle("highlighter", homeTotal < guestTotal)
}