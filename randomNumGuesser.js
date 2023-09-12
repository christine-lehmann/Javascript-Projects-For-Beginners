// npm install prompt-sync
// prompt function - to take user input
// prompt 'require' to import prompt module

const prompt = require("prompt-sync")();

const target = Math.round(Math.random()*100);

console.log("\tW E L C O M E !\n");

let guesses = 0;
// console.log(target);

while(true){
    guesses++;

    const guess = Number(prompt("Guess the number (0-100): "));  
    if (guess > target) {
    console.log("Your guess is too high. Try again.");
    }
    else if (guess < target){
        console.log("Your guess is too low. Try again.");
    }
    else{
        console.log("You got it right!");
        break;
    }

}
console.log("It took you", guesses, "guess/guesses!");
