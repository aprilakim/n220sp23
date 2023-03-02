/*
April Kim
1 March 2023
N220 sp23
Class #23523
*/

/*-------- Instructor guidelines:---------------
Generate a random move for the computer (rock/paper/scissors)
If the play chose guard
Skip the RPS logic, and subtract half a point from their score
Otherwise, run the RPS logic
Check to see if the player won against the computer
If so, add one to their score
Check if the player lost
If so subtract one from score
Check for tie
If so, do nothing to score
Once the logic is complete,
show the results of the round: You chose X, computer chose Y. 
update the score
-------------------------------------------------*/


/*-------Computer Player-------------------------*/
// store a random number in variable that will act as computer picking RPS
//if number is between 0-32: rock, 32-65: paper, 65-99: scissors, for example
let displayDraw = document.getElementById("score");
let score = [0,0];
let computerPlayer = Math.floor(Math.random() *100);
console.log(displayDraw);
//displayDraw.innerHTML = computerPlayer;
if (computerPlayer < 32){
    displayDraw.innerHTML = "Rock";
}
else if (computerPlayer > 32 && computerPlayer < 65){
    displayDraw.innerHTML = "Paper";
}
else {
    displayDraw.innerHTML = "Scissors";
}

//Rules: Scissors beats paper, paper beats rock, rock beats scissors

/*--------Human Player--------------------------*/
// If player chooses guard button, deduct half a point from their score
let humanPlayerChoices = [document.getElementById("guardB"), document.getElementById("rockB"), document.getElementById("paperB"), document.getElementById("scissorsB")];
function guardB(){
    
// use if statements???? to compare the computer and human choices to determine
//which player gets the point added to their score, and which player
//gets a point deducted

// IF there is a tie, nothing happens

//display results of Human: (r/p/s) & Computer: (r/p/s)

//update score
