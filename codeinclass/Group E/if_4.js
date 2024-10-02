//Number 4 : Nested if statements
let expired = 'false';
let quality = 7;

if (expired = 'false'){
    if (quality >= 8) {
        console.log("Good Quality.");
    } else if (quality >= 5) {
        console.log("Average Quality.");
    } else {
        console.log("Poor Quality.");
    }
} else {
    console.log("Do not use.");
}