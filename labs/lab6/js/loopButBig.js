/*
April Kim
19 February 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/

/* Create <div> with id ="counter" */
let count = document.getElementById("counter");
count.style.width= "450px";
count.style.height= "300px";
count.style.backgroundColor= "#4287f5";
count.style.textAlign= "center";
count.style.padding= "10px";
count.style.fontSize = "25px";


/*--------------------------------------------------------------------------------------
when mouse does something, change the style-------
Initialization begins at 1000, if it's less than 5000, add 1000 to the iterated variable  
display the value in the <div>---------------------------------------------------------*/

function displayNums(){
    for (let number = 1000; number <= 5000; number+= 1000){
        count.innerHTML += number + "<br>";
    }
}
  