// HTML DOM
const vitamin = document.querySelectorAll('.vitamin');
const row = document.querySelectorAll('row-number');
const vitName = document.querySelectorAll('vit-name');
const consumption = document.querySelectorAll('.consumption');
const dailyAmount = document.querySelectorAll('.daily-amount');

// VITAMIN AND MINERAL STATS AND VALUES
var vitaminsMinerals = {
    vitA: { 
        row: 1,
        name: "Vitamin A",
        alternate: "RETINOIDS AND CAROTENE",
        category: "Vitamin",
        dailyAmount: 300,
        where: "eggs, carrots"
    },
    vitB1: {
        row: 2,
        name: "Vitamin B1",
        alternate: "THIAMIN",
        category: "Vitamin",
        dailyAmount: 'unknown',
        where: "brown rice, watermelon"
    }
}

//INPUTING VALUES INTO HTML FILE
//VITAMIN A

for (let v = 0; v < vitamin.length; v++) {
  row[v].textContent = vitaminsMinerals[v].row.value
}

//FUNCTION TO COMPARE USER CONSUMPTION TO RECOMMENDED DAILY AMOUNT
for (let i = 0; i < vitamin.length; i++) {
    consumption[i].addEventListener('change', function(){
        let consumeAmount = consumption[i].value;
        if (consumeAmount === dailyAmount[i].textContent) {
            vitamin[i].style.backgroundColor = "#00FF00";
        } else if (consumeAmount < dailyAmount[i].textContent) {
            vitamin[i].style.backgroundColor = "#FFF000";
        } else if (consumeAmount > dailyAmount[i].textContent) {
            vitamin[i].style.backgroundColor = "#FF0000";
        }
    })
}