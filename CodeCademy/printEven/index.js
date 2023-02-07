var numberValue =             document.getElementById("demo");

// var num = 10;
// var evenNum = "";
// for(i = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             evenNum += i + " ";
//         }
//     }
//     console.log(evenNum)
//     numberValue.innerHTML = evenNum;

function printEvenNum(val){
    var text = "";
    for(i = 0; i <= val; i++) {
        if (i % 2 == 0) {
            text += i + " ";
        }
    numberValue.innerHTML = text;
    }
}
printEvenNum(500)