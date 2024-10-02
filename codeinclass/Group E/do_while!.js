const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number;

const askForNumber = () => {
  rl.question('Please enter a number between 1 and 10: ', (input) => {
    number = Number(input); // Convert input to a number

    if (number >= 1 && number <= 10) {
      console.log(`Thank you! You entered a valid number: ${number}`);
      rl.close(); // Stop the program when a valid number is entered
    } else {
      console.log("Invalid number. Try again.");
      askForNumber(); // Ask again if the number is invalid
    }
  });
};

askForNumber();
