/*
April Kim
19 February 2023
N220 sp23
Class #23523
*/


let faves = document.getElementById("faves");

let myFaves = [ "Thunderstorms", " Coffee", " Plants", " Cool lighting", " Cozy blankets"]; 


faves.style.padding = "20px" ;
faves.style.backgroundColor = "#34c0eb" ;
faves.style.width = "450px" ;
faves.style.fontSize = "20px" ;
faves.style.fontFamily = "sans-serif" ;



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
        faves.innerHTML+=  faveItem  + "  is one of my favorite things. <br><br>" ;
      
    console.log(faveItem);
}



  





