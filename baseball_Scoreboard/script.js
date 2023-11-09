const input = document.querySelectorAll("input[type=number]");
const strikesBallsOuts = document.getElementById("srikes-balls-outs");

for (let i =0; i < input.length; i++){
    input[i].value = 0;
}

document.addEventListener("dblclick", () => {
    
})

document.addEventListener("click", function(evt){
    if (evt.target.className === "score" || evt.target.parentElement.id === "strikes-balls-outs" ){
        evt.target.value++;  
    }
});