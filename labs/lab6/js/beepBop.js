/*
April Kim
19 February 2023
N220 sp23
Class #23523
*/

/*--Algorithm: */

let beeps = document.getElementById("beeper");

beeps.style.fontSize += " 20px";


 //For loop- if i is less than 25 run code
for (let i = 0; i < 25; i++){
console.log(i);
    //if i/3 with no modulas output word "beep"
    if (i % 3 == 0 ){
        beeps.innerHTML += i +" beep" + "<br>";
    }
    //if i/5 with no modulas ouput word "bop"
    if (i % 5 ==0){
        beeps.innerHTML += i + " bop" + "<br>" ;
    //if i/3 && i/5 output "beep" + "bop"       
    }
    if ( i % 3 ==0 && i % 5 ==0){
        beeps.innerHTML += i +" beepbop" + "<br>";
    }
    if (i % 3 !=0 && i % 5 !=0){
        beeps.innerHTML += (i) + "<br>" ;
     }
}
/*---Question: why does computer think 3/0 and 5/0 are valid expressions? Is this ok?--*/
/*

Expected results:
0-24 numbers will be ran.. Numbers divisible by 3: (3, 6, 9, 12, 15, 18, 21, 24)-8 digits
                           Numbers divisible by 5: (5, 10, 15, 20) - 4 digits
                           Numbers divisble by 3 && 5: (15)- 1 digit
    >> beep(3) bop(5) beep(6) beep(9) bop(10) beep(12) beepbop(15) beep(18) bop(20) beep(21) beep(24) 
---------------*/