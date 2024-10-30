// program to total and check for discount
let a = 4500;
let b = 60000;
let c = 17000;
total = a+b+c;
console.log("The total is", total);

let mark = 100000;
if (total > mark) {
    console.log("You qualify for a discount.");
} else {
    console.log("You don't qualify for a discount. Buy more items :)");
}