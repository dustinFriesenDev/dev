// PRINT 0-10 WITH COMMA AND SPACE BETWEEN EACH VALUE
var points= []
for (let i = 1; i < 11; i++) {
    var displayPoints = "";
    (i < 10) ? displayPoints = points += i + ", " : displayPoints = points += i + " ";
    $("#entry").text(displayPoints);
}

var points2 = [];
for (let i = 0; i < 11; i++) {
    var evenPoints = "";
    if (i % 2 === 0) {
        if (i < 10){
            evenPoints = points2 += i + ", "; 
        } else {
            evenPoints = points2 += i + " ";
        }
    }
    $("#even").text(evenPoints);
}



// Print an array with the multiplication chart
var multiTable = [];

for (let a = 1; a < 11; a++){
    for (let b = 1; b < 11; b++) {
        if (a > 0 && b > 0) {
            if(b === 10){
                multiTable += a*b +";";
            } else {
                multiTable += a * b + ",";
            }
        }
    }
    $("#multiply").text(multiTable);
}
 
