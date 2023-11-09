// HTML DOM
const vitamin = document.querySelectorAll('.vitamin');
const row1 = document.querySelectorAll('.row1');
const row2 = document.querySelectorAll('.row2');
const row3 = document.querySelectorAll('.row3');
const row = document.querySelectorAll('.row-number');
const vitName = document.querySelectorAll('.vit-name');
const consumption = document.querySelectorAll('.consumption');
const dailyAmount = document.querySelectorAll('.daily-amount');
const unit = document.querySelectorAll('.unit');
const showMore = document.querySelectorAll('.show-more');
const moreInfo = document.querySelectorAll('.more-info');
const altName = document.querySelectorAll('.alt-name');
const sources = document.querySelectorAll('.sources');
const overdose = document.querySelectorAll('.overdose');
const symptoms = document.querySelectorAll('.symptoms');
const popup = document.querySelector('.popup-menu');
const hideAll = document.querySelector('.sticky-close-tabs');
// VITAMIN AND MINERAL STATS AND VALUES
//****add infoSources in vitaminsMinerals and a biblography at bottom of HTML page */
var vitaminsMinerals = {
    vitamin: [
        {row: 1,
            name: "Vitamin A",
            alternate: "Retinoids and Carotene",
            category: "Vitamin",
            menAmount: 900,
            womenAmount: 700,
            unit: "mcg/daily",
            sources: `retinoids: beef liver, eggs, shrimp, fish, fortified milk, butter, cheddar cheese, Swiss cheese.
            <br><br>
            beta carotene: sweet potatoes, carrots, pumpkins, squash, spinach, mangoes, turnip greens`,
            overdose: 9000,
            symptoms: "can cause dry, scaly skin, fatigue, nausea, loss of appetite, bone and joint pains and headaches"},
        
        {row: 2,
            name: "Vitamin B1",
            alternate: "Thiamin",
            category: "Vitamin",
            menAmount: 1.2,
            womenAmount: 1.1,
            unit: "mcg/daily",
            sources: "Pork chops, brown rice, ham, soymilk, watermelons, acorn squash",
            overdose: undefined,
            symptoms: "unknown"},

        {row: 3,
            name: "Vitamin B2",
            alternate: "Riboflavin",
            category: "Vitamin",
            menAmount: 1.3,
            womenAmount: 1.1,
            unit: "mg/daily",
            sources: "Milk, eggs, yogurt, cheese, meats, green leafy vegetables, whole and enriched grains and cereals.",
            overdose: 200,
            symptoms: "may cause urine color alteration"},

        {row: 4,
            name: "Vitamin B3",
            alternate: "Niacin",
            category: "Vitamin",
            menAmount: 16,
            womenAmount: 14,
            unit: "mg/daily",
            sources: "Meat, poultry, fish, fortified and whole grains, mushrooms, potatoes, peanut butter",
            overdose: 35,
            symptoms: "Rare: A reddened skin flush with itchiness or tingling on the face, arms, and chest is a common sign",
            infoSource: 1},

        {row: 5,
            name: "Vitamin B5",
            alternate: "Pantothenic Acid",
            category: "Vitamin",
            menAmount: 5,
            womenAmount: 5,
            unit: "mg/daily",
            sources: "chicken, egg yolk, whole grains, broccoli, mushrooms, avocados, tomato products",
            overdose: undefined,
            symptoms: "unknown"},

        {row: 6,
            name: "Vitamin B6",
            alternate: "Pyridoxine",
            category: "Vitamin",
            menAmount: 1.3,
            womenAmount: 1.3,
            unit: "mg/daily",
            sources: "Meat, fish, poultry, legumes, tofu and other soy products, potatoes, noncitrus fruits such as bananas and watermelons",
            overdose: 100,
            symptoms: '"cause numbness and tingling in hands and feet"'},
        
        {row: 7,
            name: "Vitamin B9",
            alternate: "Folate/Folic Acid",
            category: "Vitamin",
            menAmount: 400,
            womenAmount: 400,
            unit: "mcg/daily",
            sources: "asparagus, okra, spinach, turnip greens, broccoli, legumes like black-eyed peas and chickpeas, orange juice, tomato juice",
            overdose: 1000,
            symptoms: "may cause anaemia and may mask symptoms of a vitamin B12 deficiency"},
        
        {row: 8,
            name: "Vitamin B12",
            alternate: "Cobalamin",
            category: "Vitamin",
            menAmount: 2.4,
            womenAmount: 2.4,
            unit: "mcg/daily",
            sources: "Meat, poultry, fish, milk, cheese, eggs, fortified cereals, fortified soymilk",
            overdose: undefined,
            symptoms: "may cause eye conditions"},

        {row: 9,
            name: "Biotin",
            alternate: "Biotin",
            category: "Vitamin",
            menAmount: 30,
            womenAmount: 30,
            unit: "mcg/daily",
            sources: "Many foods, including whole grains, organ meats, egg yolks, soybeans, and fish",
            overdose: undefined,
            symptoms: "No known side effects"},

        {row: 10,
            name: "Vitamin C",
            alternate: "Ascorbic Acid",
            category: "Vitamin",
            menAmount: 90,
            womenAmount: 75,
            unit: "mg/daily",
            sources: "Fruits and fruit juices (especially citrus), potatoes, broccoli, bell peppers, spinach, strawberries, tomatoes, Brussels sprouts",
            overdose: "2000",
            symptoms: "large doses of vitamin C supplements might cause, diarrhea, nausea, vomiting, heartburn, stomach (abdominal) cramps, headache",
            infoSource: 2},

        {row: 11,
            name: "Choline",
            alternate: "Choline",
            category: "Vitamin",
            menAmount: 550,
            womenAmount: 425,
            unit: "mg/daily",
            sources: "milk, eggs, liver, salmon, and peanuts",
            overdose: "3500",
            symptoms: "can lead to low blood pressure (hypotension) and liver toxicity"},

        {row: 12,
            name: "Vitamin D",
            alternate: "Calciferol",
            category: "Vitamin",
            menAmount: 20,
            womenAmount: 20,
            unit: "mcg/daily",
            sources: "fatty fish",
            overdose: "50",
            symptoms: "The main consequence of vitamin D toxicity is a buildup of calcium in your blood (hypercalcemia), which can cause nausea and vomiting, weakness, and frequent urination. Vitamin D toxicity might progress to bone pain and kidney problems, such as the formation of calcium stones.",
            infoSource: 4},

        {row: 13,
            name: "Vitamin E",
            alternate: "Alpha-Tocopherol",
            category: "Vitamin",
            menAmount: 15,
            womenAmount: 15,
            unit: "mg/daily",
            sources: "vegetable oils, salad dressings and margarines made with vegetable oils, wheat germ, leafy green vegetables, whole grains, nuts",
            overdose: "1000",
            symptoms: "cause blood clotting, which results in increased likelihood of haemorrhage in some individuals"},

        {row: 14,
            name: "Vitamin K",
            alternate: "Phylloquinone/Menadione",
            category: "Vitamin",
            menAmount: 120,
            womenAmount: 90,
            unit: "mcg/daily",
            sources: "Cabbage, liver, eggs, milk, spinach, broccoli, sprouts, kale, collards, and other green vegetables",
            overdose: "unknown",
            symptoms: "Large doses of one form of vitamin K (menadione or K3) may result in liver damage or anaemia"},

        {row: 15,
            name: "Calcium",
            alternate: "Calcium",
            category: "Mineral",
            menAmount: 1300,
            womenAmount: 1300,
            unit: "mg/daily",
            sources: "Yogurt, cheese, milk, tofu, sardines, salmon, fortified juices, leafy green vegetables, such as broccoli and kale (but not spinach or Swiss chard, which have binders that lessen absorption)",
            overdose: "2500",
            symptoms: "simay cause stomach problems for sensitive individualsck"},

        {row: 16,
            name: "Chloride",
            alternate: "Chloride",
            category: "Mineral",
            menAmount: 2.3,
            womenAmount: 2.3,
            unit: "g/daily",
            sources: "Salt (sodium chloride), soy sauce, processed foods",
            overdose: "unknown",
            symptoms: "usually combined with potassium. See Potassium for more information"},

        {row: 17,
            name: "Chromium",
            alternate: "Chromium",
            category: "Mineral",
            menAmount: 35,
            womenAmount: 25,
            unit: "mcg/daily",
            sources: "Meat, poultry, fish, eggs, potatoes, some cereals, nuts, cheese",
            overdose: "200",
            symptoms: "may cause concentration problems and fainting"},

        {row: 18,
            name: "Copper",
            alternate: "Copper",
            category: "Mineral",
            menAmount: 900,
            womenAmount: 900,
            unit: "mcg/daily",
            sources: "Liver, shellfish, nuts, seeds, whole-grain products, beans, prunes, cocoa, black pepper",
            overdose: "10,000",
            symptoms: "may cause black or bloody vomit, blood in urine, coma, diarrhea, dizziness or fainting, headache (severe or continuing), heartburn, loss of appetite, lower back pain, metallic taste, nausea (severe or continuing), pain or burning while urinating, vomiting, yellow eyes or skin"},

        {row: 19,
            name: "Fluoride",
            alternate: "Fluoride",
            category: "Mineral",
            menAmount: 4,
            womenAmount: 3,
            unit: "mg/daily",
            sources: "Water that is fluoridated, toothpaste with fluoride, marine fish, teas",
            overdose: "10",
            symptoms: "nausea, vomiting",
            infoSource: 6},

        {row: 20,
            name: "Iodine",
            alternate: "Iodine",
            category: "Mineral",
            menAmount: 150,
            womenAmount: 150,
            unit: "mcg/daily",
            sources: "Iodized salt, processed foods, seafood",
            overdose: "1100",
            symptoms: "Mild symptoms consist of GI upset, nausea, vomiting, and diarrhea, which may progress to delirium, stupor, and shock",
            infoSource: 7},

        {row: 21,
            name: "Iron",
            alternate: "Iron",
            category: "Mineral",
            menAmount: 8,
            womenAmount: 8,
            unit: "mg/daily",
            sources: "Red meat, poultry, eggs, fruits, green vegetables, fortified bread and grain products",
            overdose: "45",
            symptoms: "may cause stomach upset, constipation and blackened stools"},

        {row: 22,
            name: "Magnesium",
            alternate: "Magnesium",
            category: "Mineral",
            menAmount: 420,
            womenAmount: 320,
            unit: "mg/daily",
            sources: "Green vegetables such as spinach and broccoli, legumes, cashews, sunflower seeds and other seeds, halibut, whole-wheat bread, milk",
            overdose: "350",
            symptoms: "overdose amount is refering to medicines and supplements that may cause stomach problems and diarrhoea. Not dietary magnesium"},

        {row: 23,
            name: "Manganese",
            alternate: "Manganese",
            category: "Mineral",
            menAmount: 2.3,
            womenAmount: 1.8,
            unit: "mg/daily",
            sources: "Fish, nuts, legumes, whole grains, tea",
            overdose: "11",
            symptoms: "may hinder iron adsorption"},

        {row: 24,
            name: "Molybdenum",
            alternate: "Molybdenum",
            category: "Mineral",
            menAmount: 45,
            womenAmount: 45,
            unit: "mcg/daily",
            sources: "Legumes, nuts, grain products, milk",
            overdose: "2000",
            symptoms: "may cause kidney problems and copper deficiencies"},

        {row: 25,
            name: "Phosphorus",
            alternate: "Phosphorus",
            category: "Mineral",
            menAmount: 1250,
            womenAmount: 700,
            unit: "mg/daily",
            sources: "milk and dairy products, meat, fish, poultry, eggs, liver, green peas, broccoli, potatoes, almonds",
            overdose: "4000",
            symptoms: "may cause stomach problems for sensitive individuals"},

        {row: 26,
            name: "Potassium",
            alternate: "Potassium",
            category: "Mineral",
            menAmount: 4.7,
            womenAmount: 4.7,
            unit: "g/daily",
            sources: "Meat, milk, fruits, vegetables, grains, legumes",
            overdose: "18",
            symptoms: "may cause stomach upsets, intestinal problems or heart rhythm disorder",
            infoSource: 8},

        {row: 27,
            name: "Selenium",
            alternate: "Selenium",
            category: "Mineral",
            menAmount: 55,
            womenAmount: 55,
            unit: "mcg/daily",
            sources: "Organ meats, seafood, walnuts, sometimes plants (depends on soil content), grain products",
            overdose: "400",
            symptoms: "may cause nausea, vomiting, nail discoloration, brittleness, and loss; hair loss, fatigue, irritability, and foul breath odor (often described as “garlic breath”)",
            infoSource: 9},

        {row: 28,
            name: "Sodium",
            alternate: "Sodium",
            category: "Mineral",
            menAmount: 2300,
            womenAmount: 2300,
            unit: "mg/daily",
            sources: "Salt, soy sauce, processed foods, vegetables",
            overdose: "unknown",
            symptoms: "headaches, shortness of breath, nausea, rapid heart rate, fatigue, confusion, loss of consciousness",
            infoSource: 10},

        {row: 29,
            name: "Zinc",
            alternate: "Zinc",
            category: "Mineral",
            menAmount: 11,
            womenAmount: 8,
            unit: "mg/daily",
            sources: "Red meat, poultry, oysters and some other seafood, fortified cereals, beans, nuts",
            overdose: "40",
            symptoms: "may cause anaemia and copper deficiency"}
    
    ]
}

//FUNCTION TO ADD VALUES FROM JS TO HTML FOR CLASS=VITAMIN
for (let i = 0; i < vitamin.length; i++) {
        row[i].innerHTML = vitaminsMinerals.vitamin[i].row;
        vitName[i].innerHTML = vitaminsMinerals.vitamin[i].name;
        dailyAmount[i].innerHTML = vitaminsMinerals.vitamin[i].menAmount;
        for (let u = 0; u < unit.length; u++) {
            unit[u].innerHTML = vitaminsMinerals.vitamin[i].unit;
        };
        altName[i].innerHTML = "Medical Name: " + vitaminsMinerals.vitamin[i].alternate;
        sources[i].innerHTML = "Sources: " + vitaminsMinerals.vitamin[i].sources;
        overdose[i].innerHTML = "Overdose Amount: " + vitaminsMinerals.vitamin[i].overdose;
        symptoms[i].innerHTML = "Symptoms: " + vitaminsMinerals.vitamin[i].symptoms;
        //add women amount later with an options for men or women toggle settings.
}

//FUNCTION TO COMPARE USER CONSUMPTION TO RECOMMENDED DAILY AMOUNT
for (let i = 0; i < consumption.length; i++) {
    consumption[i].addEventListener('input', function(){
        if (consumption[i].value === dailyAmount[i].innerHTML) {
            row1[i].style.backgroundColor = "#03dc03" //green;
        } else if (consumption[i].value >= vitaminsMinerals.vitamin[i].overdose) {
            row1[i].style.backgroundColor = "#FF0000" //red;
        } else if (consumption[i].value === '') {
            row1[i].style.backgroundColor = "#faebd7" //initial color;
        } else if (consumption[i].value < vitaminsMinerals.vitamin[i].overdose || consumption[i].value > dailyAmount[i].innerHTML) {
            row1[i].style.backgroundColor = "#fae01c" //yellow;
        } 
        })
}

// TOGGLE MORE INFORMATION
for (let s = 0; s < moreInfo.length; s++) {
    moreInfo[s].addEventListener('click', function() {

        if (row2[s].style.display === "none" || row2[s].style.display === '') {
            row2[s].style.display = "block";
          } else {
            row2[s].style.display = "none";
          }
    })
}












//CALCULATOR (*****NEED TO FIGURE OUT HOW TO CONNECT THE DISPLAY OF THE CALCULATOR TO THE INPUT VALUE AND THEN COMPARE THE CALCULATOR VALUE TO THE DAILY-AMOUNT AND CHANGE ROW COLOR AS NEEDED*****)
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete () {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '$divide':
                computation = prev / current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.'))
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
        
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
        this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
    })

    equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
        
    })

    allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })

    deleteButton.addEventListener('click', button => {
        calculator.delete()
        calculator.updateDisplay()
    })

//TOGGLE POPUP MENU WHEN THE SHOWMORE BUTTON IS CLICKED
for (let pop = 0; pop < showMore.length; pop++) {
    showMore[pop].addEventListener("click",function()
    { 
        if (row3[pop].style.display === "none" || row3[pop].style.display === '') {
            if (window.innerWidth < 404){
                row3[pop].style.display = "block";
                row3[pop].style.top = "45px";
                row3[pop].style.right = "62px";
            } else if (window.innerWidth < 675) {
                row3[pop].style.display = "block";
                row3[pop].style.top = "14px";
                row3[pop].style.right = "52px";
            }  else {
                row3[pop].style.right = "-80px";
                row3[pop].style.top = "12px";
                row3[pop].style.display = "block";
            }
        } else if (row3[pop].style.display === "none" || row3[pop].style.display === ''){
            row3[pop].style.display = "block";
        } else {
            row3[pop].style.display = "none"
        }
    }   
    );
}

// CLOSE ALL OPENED MORE INFOR AND SHOW MORE POPUPS. 
hideAll.addEventListener("click", function() {
    for (let hide = 0; hide < showMore.length; hide++){
        if (row2[hide].style.display === "block" || row2[hide].style.display === "flex") {
            row2[hide].style.display = "none"
        }
        if (row3[hide].style.display === "block" || row3[hide].style.display === "flex"){
            row3[hide].style.display = "none"
        }
    }
})


//sources of information
//vitamin B3 Overdose. https://www.hsph.harvard.edu/nutritionsource/niacin-vitamin-b3/#:~:text=of%20decreased%20niacin.-,Toxicity,chest%20is%20a%20common%20sign.

// Vitamin C overdose: https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/vitamin-c/faq-20058030#:~:text=Although%20too%20much%20dietary%20vitamin,Vomiting

//Choline overdose: https://www.hsph.harvard.edu/nutritionsource/choline/#:~:text=%5B1%5D-,Toxicity,odor%2C%20or%20nausea%2Fvomiting.

//Vitamin D overdose: https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/vitamin-d-toxicity/faq-20058108#:~:text=The%20main%20consequence%20of%20vitamin,the%20formation%20of%20calcium%20stones.

//Copper Overdose: https://www.mayoclinic.org/drugs-supplements/copper-supplement-oral-route-parenteral-route/side-effects/drg-20070120

//Fluoride overdose https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5651468/

//Iodine Overdose: https://pubmed.ncbi.nlm.nih.gov/32809605/#:~:text=Iodine%20toxicity%20may%20lead%20to,delirium%2C%20stupor%2C%20and%20shock.

//Potassium overdose: https://lpi.oregonstate.edu/mic/minerals/potassium#reference50

//Selenium overdose: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3225252/#:~:text=Selenium%20toxicity%20can%20occur%20with,as%20%E2%80%9Cgarlic%20breath%E2%80%9D).

//Sodium overdose: https://missouripoisoncenter.org/sodium-nitrite-suicide-trend/

