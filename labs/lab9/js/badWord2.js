/*
April Kim
13 April 2023
N220 sp23
Class #23523
*/


let txtInput= document.getElementById("txtInput");
let dvOutput = document.getElementById("dvOutput");

// Split user input string into an array using .split
function splitString(){
    let input = txtInput.value;
    let splitInput = input.split(" ");
    console.log(splitInput);
    
    let found = splitInput.find( function(word){
        return word == [ "clear", "water", "tires"];
    });
    //Create a counter that counts each bad word
    let count = 0;
      if found == word (count += 1);
    
    dvOutput.innerHTML = count + " bad words detected"
}



    
    
  
    
