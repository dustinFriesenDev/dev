const comparisonBox = document.querySelectorAll(".comparison-box");
const input = document.querySelectorAll(".input");
const compared = document.querySelectorAll(".compared");


// function compare() {
//     if (input.value == compared.textContent) {
//     comparisonBox.style.backgroundColor = "#00FF00";
//     } else {
//         comparisonBox.style.backgroundColor = "#FF0000";
//     }
// }



// iterate through the input and return input


// for (let c = 0; c < compared.length; c++) {
//     var comVal = compared[c].textContent; 
//     console.log(comVal);
// }
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("change", function(){
        let inVal = input[i].value;
            if (inVal === compared[i].textContent) {
                comparisonBox[i].style.backgroundColor = "#00FF00";
            } else {
                comparisonBox[i].style.backgroundColor = "#FF0000";
            }
     })   
}