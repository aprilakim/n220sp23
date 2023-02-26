/*
April Kim
19 February 2023
N220 sp23
Class #23523
*/


let faves = document.getElementById("faves");

let myFaves = [ "Thunderstorms", " coffee", " plants", " cool lighting", " cozy blankets"]; 


/*---- create a loop that iterates through and -----*/
/*----concatencate the result with +".., is one of my favorite things"-----*/
/*---Expected Ouput: Thunderstorms is one of my favorite things. 
                    Coffee is one of my favorite things.
                    Plants is one of my favorite things.
                    Cool Lighting is one of my favorite things.
                    A Cozy Blanket is one of my favorite things.

    Actual Output: A Cozy Blanket is one of my favorite things. ----------*/


function displayFaves(){}
    for(let i=0; i<myFaves.length; i++){
        let faveItem = myFaves[i];
        faves.innerHTML = myFaves + " are a few of my favorite things.";
      
    console.log(faveItem);
}



  





