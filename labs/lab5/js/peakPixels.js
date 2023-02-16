/*
April Kim
13 February 2023
N220 sp23
Class #23523
*/


/*Algorithm:----------------------------------------------------------------*/

/*--Link the <div> element with id in HTML document-------*/


let shape = document.getElementById("shapeB");
shape.style.width= "100px";
shape.style.height= "100px";

let h = 100;
let w = 100;

/*--If mouse is clicked, increase div by 1.1* the original size-------*/
/*--Notes: the square grows width and height ONE time only. How can I 
(store the variables so that the square can keep increasing in size?)---*/

    function growSquare() {
        
        shape.style.width = `${w * 1.1}px`; 
        shape.style.height = `${h * 1.1}px`;  
        h *= 1.1 ;
        w *= 1.1 ;
        
}       


