/*
April Kim
27 March 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/
//--Accept user input, only if it is a number--//
//--Or else ask for a number input--//

let txtNumber = document.getElementById("txtNumber");
let dvOutput = document.getElementById("dvOutput");

function getInput(){
    
    //??this is not letting me know when input is a string vs number
    if (Number.isNaN(txtNumber.value == false)){
        dvOutput.innerHTML = "Not a number, try again";
    }
    
   //let input = Number(txtNumber.value);
    else divideNumber();
}

//--Function that determines if there is a remainder when number is divided by 7:--//
//--If there is no remainder, return TRUE that the number is divisible by 7--//
    //ie 7, 14, 21, 28, etc..//
function divideNumber(){
    if (txtNumber.value % 7 == 0){
        dvOutput.innerHTML = "TRUE " + txtNumber.value + " is divisible by 7";
}
    if (txtNumber.value % 7 !=0){
        dvOutput.innerHTML = "FALSE " +txtNumber.value + " is NOT divisible by 7";
    }
}
//--If there is a remainder, return FALSE that the number is not a factor of 7--//