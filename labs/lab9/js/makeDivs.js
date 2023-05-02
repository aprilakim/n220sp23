/*
April Kim
13 April 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];
//create a function that updates a div by looping through the objects in the array
function createDivs(){

    for (let i = 0; i < objects.length; i++){
        let newEl = document.createElement("div");
        newEl.style.innerHTML = objects[i];
        dvOutput.appendChild(newEl);
    }
}