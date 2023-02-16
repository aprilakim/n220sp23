/*
April Kim
13 February 2023
N220 sp23
Class #23523
*/

/*--Algorithm:----------------------------------------------------------------*/
/*--create a composition, or name, that has css linked to it (class, id, tag)------------------*/
/*--when mouse does something, change the color or size, for example------------------*/
/*--innerhtml append the name AprilApril, for example------------------*/

let newMyName = document.getElementById("myName");

function addName() {
    /*document.getElementById("myName").innerHTML = ; */
    newMyName.innerHTML = "Daisy";
    newMyName.style.backgroundColor = "#f5e942";
    newMyName.style.color = "#f2f2ed";
    newMyName.style.textShadow = "3px 3px 4px #000000";
    newMyName.style.padding = "20px";
    newMyName.style.borderRadius = "60px"
    newMyName.style.width = "auto";

}
/*----------------------------------------------------------------------------------*/

/*--Prof Instructions: --Create a composition that, at minimum:
1. Changes the css property of an asset on a mouse interaction (mouse over, mouse out, click)
2. Modifies and changes the inner html of one element
3. Accesses and modifies a variable outside of a local, function scope

 /*----------------------------------------------------------------------------------*/