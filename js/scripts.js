function generateArrayFromNumberInput(input) {
    return Array.from({length:parseInt(input.value)+  1}, (v,i) => i);
}

function replaceOnes(array) {
    return array.map((value) =>  {
        if(value.toString().includes("1")){
            return "Beep!";
        }  else  {
            return value;
        }
    });
}

function replaceTwos(array){
    return array.map((value) => {
        if (value.toString().includes("2")) {
            return"Boop!";
        } else {
            return value;
        }
    });
}

function replaceThrees(array){
    return array.map((value) => {
        if (value.toString().includes("3")) {
            return"Won't you be my neighbor?";
        } else {
            return value;
        }
    });
}

function generateOutput() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    let array = generateArrayFromNumberInput(input);
    array = replaceThrees(array);
    array = replaceTwos(array);
    array = replaceOnes(array);

    let html = "";
    for(let i=0; i<array.length; i++){
        html += array[i] + "<br>";
    }

    output.innerHTML = html;
}
function resetOutput() {
    let output = document.getElementById("output");
    output.innerHTML = "";
}

window.addEventListener("load", function(){

    const roboger = document.getElementById("Roboger")
    roboger.addEventListener("submit", function(event){
        event.preventDefault();
        generateOutput();   
    })

    const resetBtn = this.document.getElementById("reset")
    resetBtn.addEventListener("click", function(){
        resetOutput();
    })
})