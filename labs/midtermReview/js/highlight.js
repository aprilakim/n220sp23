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

//OMG do i have to make a function for each div clicked.. long hand
//then  maybe I can figure out DRY ???

//Algorithm: Use onclick in each of the 6 divs
//set global properties that get updated in a function 
//function should make text bold and change background color
//separate function or if statement to clear others? 
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
let selected = document.getElementsByClassName("animal");

//class not working for me RN so doing id just to make s happen
let animalOne = document.getElementById("penguin");
let animalTwo = document.getElementById("octopus");
let animalThree = document.getElementById("bear");
let animalFour = document.getElementById("seahorse");
let animalFive = document.getElementById("parrot");
let amimalSix = document.getElementById("sloth");

//store animals in array (not sure if essential, yet)
let animalArray = [animalOne, animalTwo, animalThree, animalFour, animalFive, animalSix];

//nothing happened when I tried...
//let all = document.body.getElementsByTagName("div");
//all.style.padding = "15px";

//Function: highlight and bold text,reset other divs 
function highlightText(){   
   animalOne.style.backgroundColor = "#f5695f";
   animalOne.style.fontWeight = "bold";
   display.innerHTML = "Penguin";

   animalTwo.style.backgroundColor = "#f78f39";
   animalTwo.style.fontWeight = "bold";
   display.innerHTML = "Octopus";

   animalThree.style.backgroundColor = "#f3f582";
   animalThree.style.fontWeight = "bold";
   display.innerHTML = "Bear";

   animalFour.style.backgroundColor = "#82f593";
   animalFour.style.fontWeight = "bold";
   display.innerHTML = "Seahorse";

   animalFive.style.backgroundColor = "#82e5f5";
   animalFive.style.fontWeight = "bold";
   display.innerHTML = "Parrot";

   //why isnt sloth working????????
   animalSix.style.backgroundColor = "#be89f0";
   animalSix.style.fontWeight = "bold";
   display.innerHTML = "Sloth";
   

   //nothing happened when I tried...
   //animalArray[].style.backgroundColor = "#74d9ed";
}

