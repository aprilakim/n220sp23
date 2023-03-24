/*
April Kim
20 March 2023
N220 sp23
Class #23523
*/

/*--Algorithm:----*/
/*Prof Instructions:
Create a number guessing name, using an input and a button to gather a number.
The number to be guessed should be a hard-coded whole number between 1 and 20.
Tell the user if the number is too high, equal to, or too low than a number you have hard-coded in your application.
Remove the text in the input when the user clicks the button.

-----------*/
let answer = 7;
let txtGuess = document.getElementById("txtGuess");
let dvOutput = document.getElementById("dvOutput");

/*--store user input in variable in empty string?--*/
/*--create function that compares user input to hard coded number--*/
function compareGuess(){
    /*---if user number is greater than set number, output says too high-*/
    if Number(txtGuess.value) > answer {
        dvOutput.innerHTML = "Too high!";
    }

    /*---if user number is less than set number, output says too low-*/
    if Number(txtGuess.value) < answer {
        dvOutput.innerHTML = "Too low!";
    }

    /*--if user guesses correct number, say correct! the number is __ --*/
    if Number(txtGuess.value) = answer {
        dvOutput.innerHTML = "You are correct! The answer is" + answer +"!"
    }
    else {
        dvOutput.innerHTML = "I don't understand"
    }
}


