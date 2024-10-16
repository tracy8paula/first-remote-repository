// a: differneces between var, let and const in JavaScript
// Variables are values attached that explain for what that item represents.
var alpha = 1
// the var function declares and gives room to reassign your values to the variables chosen
let beta = 2
// the let function restricts reassigning your values 
const trio = 3
// the  const function restricts your values to numerals

//b: what happens if you try to reassign values to variables declared with let or const
// the let function will reassign the value to the new one and the const will not reassign

//c: what will be your output of the following code, explain your answer
var x = 10;
let y = 5;
const z = 3;

x = 20;
y = 15;
//z = 7;
console.log(x,y,z);
// it doesn't print with the error of assignment to constant variable
//Why does the code behave this
