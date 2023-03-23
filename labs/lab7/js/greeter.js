/*
April Kim
20 March 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/
/*--Assuming input element and button element are created in HTML file:--*/
/*--Create function getUsername--*/

let txtGreeting = document.getElementById("txtGreeting");
let divOutput = document.getElementById("divOutput");

function getName(){
    divOutput.innerHTML = "Hello, " + txtGreeting.value + "!";
    console.log("Hello, " + txtGreeting.value); 
}
/*--save user input in variable--*/
/*--Output username to screen using innnerHTML--*/