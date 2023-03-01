/*
April Kim
1 March 2023
N220 sp23
Class #23523
*/
/*-------- Instructor guidelines:---------------
Make an application with six divs on the screen, each with a different word.
When any of the divs is clicked,
highlight that that div by changing its background color and making the text bold
remove the bold/background highlight from any other divs
add the clicked div's text into a seperate div at the top of the screen
-------------------------------------------------*/

//Algorithm: Use onclick in each of the 6 divs
//set global properties that get updated in a function 
//function should make text bold and change background color
//as well as reset any highlighted divs back to the original
//have a separate div that displays the text of the highlighted div

//div that displays highlighted word
let display = document.getElementById("displayWord");
display.style.margin = "30px";
display.style.fontSize = "30px";
display.style.border = "solid";
display.style.width = "350px";
display.style.padding = "15px";

//class needed so that ONE function can be applied to ANY of the words that are clicked
const selected = document.getElementsByClassName("animal");

//class not working for me RN so doing id just to make s happen
let animalOne = document.getElementById("penguin");
//
//Do I need an array to store the animals? 


//Function: highlight and bold text,reset other divs 
function highlightText(){   
   animalOne.style.backgroundColor = "#74d9ed";
   animalOne.style.fontWeight = "bold";
   display.innerHTML = "Penguin";

   selected.style.backgroundColor = "";
   
}
