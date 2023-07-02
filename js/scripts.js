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

function generateOutput(input){
    const array = generateArrayFromNumberInput(input);
    const onesReplaced = replaceOnes(array);
    const twosReplaced = replaceTwos(onesReplaced);
    const threesReplaced  = replaceThrees(twosReplaced);
    const output = threesReplaced.join(",");

    document.getElementById("array-output").textContent = output;
}