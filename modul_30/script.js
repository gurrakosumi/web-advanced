var x = 0

if (x > 2){
    console.log("x is greater than 2") // this block runs if the condition is true
}else{
    console.log("x is not greater than 2")
}

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var buttonSum = document.getElementById("btn_sum");
var result = document.getElementById("result");

buttonSum.onclick = function () {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var sum = number1 + number2;
    result.innerHTML = sum;
}; 

    

    //Challenge: Add two other inputs to get values and calculate the sum of those values 
//and show it in on a heading when a button is clicked. 