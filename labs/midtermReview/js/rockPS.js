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

let buttons = document.body.getElementsByTagName("div");
buttons.style.margin = "15px";

/*-------Computer Player-------------------------*/
// store a random number in variable that will act as computer picking RPS
//if number is between 0-2: rock, 3-5: paper, 6-8: scissors, for example


/*--------Human Player--------------------------*/
// If player chooses guard button, deduct half a point from their score

// use if statements???? to compare the computer and human choices to determine
//which player gets the point added to their score, and which player
//gets a point deducted

// IF there is a tie, nothing happens

//display results of Human: (r/p/s) & Computer: (r/p/s)

//update score
