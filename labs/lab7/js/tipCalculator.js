/*
April Kim
20 March 2023
N220 sp23
Class #23523
*/

/*--Algorithm:---------------*/

/*--Assuming input element and button element are created in HTML file:--*/
/*--Create function getBillAmount--*/
/*--save user input in  variable that ensures input is numerical--*/
let txtBill = document.getElementById("txtBill");
let dvOutput = document.getElementById("dvOutput");

function calculateTip(){
   // let tip = Number(txtBill.value);
    dvOutput.innerHTML = "Tip:$ " + (txtBill.value * .2 )+ " Total:$ " + (Number(txtBill.value * .2) + Number(txtBill.value));
    
}
/*--calculate tip by multiplying user input by 20%--*/
/*--add tip amount to user input--*/
/*--Output tip to screen using innnerHTML--*/
/*--Output the tip + bill = total amount to screen using innnerHTML--*/