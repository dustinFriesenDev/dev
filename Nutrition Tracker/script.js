// #1 NUTRIENT
var name1 = document.querySelector("#nutr1 .name");
var alternate1 = document.querySelector('#nutr1 .alternate');
var category1 = document.querySelector('#nutr1 .category');
var recommended1 = document.querySelector('#nutr1 .recommended');
var intake1 = document.getElementById('intake1');
var where1 = document.querySelector('#nutr1 .where');

var vitA = {
    name: "Vitamin A",
    alternate: "RETINOIDS AND CAROTENE",
    category: "Vitamin",
    recommended: 300,
    intake: "",
    where: "eggs, carrots"
}

intake1.addEventListener("change", compare1);
function compare1() {
    if  (intake1.value < 300 || intake1.value > 500) {
        intake1.style.backgroundColor = "rgb(255, 177, 33)";
    } else {
        intake1.style.backgroundColor = "white";
    }
};

name1.innerHTML = vitA.name;
alternate1.innerHTML = vitA.alternate;
category1.innerHTML = vitA.category;
recommended1.innerHTML = vitA.recommended + " mcg";
where1.innerHTML = vitA.where;

// #2 NUTRIENT
var name2 = document.querySelector("#nutr2 .name");
var alternate2 = document.querySelector("#nutr2 .alternate");
var category2 = document.querySelector("#nutr2 .category");
var recommended2 = document.querySelector("#nutr2 .recommended");
var intake2 = document.getElementById("intake2");
var where2 = document.querySelector("#nutr2 .where");

let vitB1 = {
    name: "Vitamin B1",
    alternate: "THIAMIN",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}

intake2.addEventListener("change", compare2);
function compare2() {
    if  (intake2.value < 300 || intake2.value > 500) {
        intake2.style.backgroundColor = "rgb(255, 177, 33)";
    } else {
        intake2.style.backgroundColor = "white";
    }
};

name2.innerHTML = vitB1.name;
alternate2.innerHTML = vitB1.alternate;
category2.innerHTML = vitB1.category;
recommended2.innerHTML = vitB1.recommended + " mg";
where2.innerHTML = vitB1.where;

// #3 NUTRIENT
let vitB2 = {
    name: "Vitamin B2",
    alternate: "RIBOFLAVIN",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #4 NUTRIENT
let vitB3 = {
    name: "Vitamin B3",
    alternate: "NIACIN",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #5 NUTRIENT
let vitB5 = {
    name: "Vitamin B5",
    alternate: "PANTOTHENIC ACID",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #6 NUTRIENT
let vitB6 = {
    name: "Vitamin B6",
    alternate: "PRYIDOXINE",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #7 NUTRIENT
let vitB12 = {
    name: "Vitamin B12",
    alternate: "COBALAMIN",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #8 NUTRIENT
let biotin = {
    name: "BIOTIN",
    alternate: "none",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #9 NUTRIENT
let vitC = {
    name: "Vitamin C",
    alternate: "ASCORBIC ACID",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #10 NUTRIENT
let choline = {
    name: "CHOLINE",
    alternate: "none",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #11 NUTRIENT
let vitD = {
    name: "Vitamin D",
    alternate: "CALCIFEROL",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #12 NUTRIENT
let vitE = {
    name: "Vitamin E",
    alternate: "ALPHA-TOCOPHEROL",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #13 NUTRIENT
let vitB9 = {
    name: "Vitamin B9",
    alternate: "FOLIC ACID",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #14 NUTRIENT
let vitK = {
    name: "Vitamin K",
    alternate: "PHYLLOQUINONE MENADIONE",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #15 NUTRIENT
let calcium = {
    name: "Calcium",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #16 NUTRIENT
let chloride = {
    name: "CHLORIDE",
    alternate: "none",
    category: "Minearal",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #17 NUTRIENT
let chromium = {
    name: "Chromium",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #18 NUTRIENT
let copper = {
    name: "Copper",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #19 NUTRIENT
let fluoride = {
    name: "Fluoride",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #20 NUTRIENT
let iodine = {
    name: "Iodine",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #21 NUTRIENT
let iron = {
    name: "Iron",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #22 NUTRIENT
let magnesium = {
    name: "Magnesium",
    alternate: "none",
    category: "Vitamin",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #23 NUTRIENT
let manganese = {
    name: "Manganese",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #24 NUTRIENT
let molybdenum = {
    name: "Molybdenum",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #25 NUTRIENT
let phosphorus = {
    name: "Phosphorus",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #26 NUTRIENT
let potassium = {
    name: "Potassium",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #27 NUTRIENT
let selenium = {
    name: "Selenium",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #28 NUTRIENT
let sodium = {
    name: "Sodium",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #29 NUTRIENT
let sulfur = {
    name: "Sulfur",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}
// #30 NUTRIENT
let zinc = {
    name: "Zinc",
    alternate: "none",
    category: "Mineral",
    recommended: 'unknown',
    intake: "",
    where: "brown rice, watermelon"
}