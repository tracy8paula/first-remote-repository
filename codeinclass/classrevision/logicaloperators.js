// logical operators work in conditions for comparison in that && works for both condition to be true and || is an or where only one needs to be true
// Using age eligible to start as 18, and Ugandan
let age = 20;
let nationality ="Ugandan";
if (age >= 18 && nationality === "Ugandan"){
    console.log("Person is eligible to vote");
} else {
    console.log("Person cannot vote.");
}


if (nationality != "Ugandan" || age < 18) {
    console.log("Person cannot vote");
} else {
    console.log("Person is eligible to vote");
}