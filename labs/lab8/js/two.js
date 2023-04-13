/*
April Kim
27 March 2023
N220 sp23
Class #23523
*/

/*--Algorithm:----

  -----------*/


//generateRandom function generates RANDOM number between 0-10 (*10)FLOOR


let randNum = Math.floor(Math.random()*10);

function generateNumber(){
  //I wanted to reset the value somehow, but cannot figure out where 
  //to place statement:
  //let randNum.value = "";
  doSomething();
  
}
//when button is clicked, display random number to screen
function doSomething(){
  dvOutput.innerHTML = "Random Number is: " + randNum;
  
  
}