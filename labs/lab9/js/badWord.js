/*
April Kim
13 April 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/

let txtInput= document.getElementById("txtInput");
let dvOutput = document.getElementById("dvOutput");
// Split user input string into an array using .split
function splitString(){
    let input = txtInput.value;
    let splitInput = input.split(" ");
    console.log(splitInput);
    
    getBadWords();
}


//create a function that loops the array looking for the "bad" words
function getBadWords(){
    let badWords = [ "clear", "water", "tires"];
    //Create a counter that counts each bad word
    let count = 0;
    
    for(let i = 0; i < badWords.length; i++){
        if(splitInput[i] == badWords){
            console.log("Found bad words at "+ i);
            dvOutput.innerHTML = count + " bad words detected"
        }
    }
}







//Output if/ how many bad words were detected

//Remove user input and make room for new user input