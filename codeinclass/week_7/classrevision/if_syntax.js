//a: explain the syntax of the if statement in JavaScript. What is the purpose of using if statements in a program?
// if statements work with conditions and they give room of having many standpoints within a condition which is shown by (condition) and {to hold the entire if statement}
//b: Given the following code, what will be the output and why?
let temp = 30;
if (temp > 25) {
    console.log("It's hot!");
} else{
    console.log("It's cold!");
}
// the output is it's hot! because our value which we are checking falls in the first condition
// c: How would you modify the program to print a message for temperatures between 15 and 25 degrees?
let temperature = 20;
if (temperature > 25) {
    console.log("It's hot!")
} else if (temperature > 15) {
    console.log("It's moderate")
} else{
    console.log("It's cold!")
}