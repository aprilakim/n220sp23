/*
April Kim
19 February 2023
N220 sp23
Class #23523
*/

let results = document.getElementById("race");
let first = document.getElementById("winner");
let runnerUp = document.getElementById("runnerUp");
let last = document.getElementById("third");

results.style.margin = "30px";

first.style.color = "#e0a028";
first.style.padding = "20px";
first.style.fontSize = "40px";

runnerUp.style.color = "#72bcdb";
runnerUp.style.padding = "20px";
runnerUp.style.fontSize = "30px";

last.style.color = "#b35729";
last.style.padding = "20px";
last.style.fontSize = "30px";

 /* Compute 3 random numbers ? to simulate race times */
let raceTimeA = Math.floor(Math.random() *100);
let raceTimeB = Math.floor(Math.random() *100);
let raceTimeC = Math.floor(Math.random() *100); 

/* Store variables for racetime 1, 2 , & 3 */
let raceArray = [raceTimeA, raceTimeB, raceTimeC];
//console.log(raceArray.sort());

//sort the rae times from lowest to highest
results.innerHTML = (raceArray.sort());
winner.innerHTML = "Winner time: " + raceArray[0] + " minutes" + "<br>";
runnerUp.innerHTML = "Runner Up time: " + raceArray[1] + " minutes" + "<br>";
last.innerHTML = "Last place time: " + raceArray[2] + " minutes" + "<br>";