//function roboger(string) {
//     let inputArray = string.split(" ");
//     let outputArray = [];

//     for (let i = 0; i < wordArray.length; i++) {
//         let currentWord = wordArray[i];
//         let vowels = ['a', 'e', 'i', 'o', 'u'];
//         let firstTwoLetters = currentWord.slice(0,2);
//         let thirdLetters = currentWord.slice(2);
//         let firstLetter = currentWord.slice(0, 1);
//         let remainingLetters = currentWord.slice(1);

//         if (vowels.indexOf(currentWord[0]) > -1) {
//             vowelNewWord = currentWord + "way";
//             outputArray.push(vowelNewWord);
//         } else if (firstTwoLetters === "qu") {
//             quNewWord = thirdLetters + firstTwoLetters + "ay";
//             outputArray.push(quNewWord);
//         } else {newWord = remainingLetters + firstLetter + "ay";
//             outputArray.push(newWord);
//         }; 
//     } return outputArray.join(" ");
// }


// const submitButton = document.querySelector('buttonSubmit')
// submitButton.addEventListener("submit",numGen);


function generateArrayFromNumberInput(input) {
    return Array.from({length:parseInt(input.value)+  1}, (v,i) => i);
}

   


