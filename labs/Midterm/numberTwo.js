/*April Kim
2 March 2023
N220
*/

let word = document.getElementById("b");


function changeText(){
    let counter = 0;
    if (counter < 3){
    word.innerHTML = "Same";
    }
    //How do I let program know mouse has been clicked 3+ times?
    else {
        word.innerHTML += "Different";
    }

}