// npm install prompt-sync
// prompt function - to take user input
// prompt 'require' to import prompt module

const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

console.log("\tW E L C O M E !");

while(true){
    const playerPick = prompt("Enter rock, paper, scissors (or q to quit): ");
    if(playerPick.toLowerCase() === "q"){
        break;
        }
        if (playerPick !== "rock" && 
            playerPick !== "paper" && 
            playerPick !== "scissors"
        )
            {
            console.log("Please enter a valid chocie.");
            continue;
        }

        const choices = ["rock","paper","scissors"];
        const randomIndex = Math.round(Math.random() * 2);
        const computerPick = choices[randomIndex];

        console.log("The computer chose: ", computerPick);

        if (computerPick === playerPick){
            console.log("Draw!");
            ties++;
        } 
        else if (
            (playerPick === "paper" && computerPick === "rock") ||  
            (playerPick === "rock" && computerPick === "scissors") ||
            (playerPick === "scissors" && computerPick === "paper") 
        ){
            console.log("Won!");
            wins++;
        }
        else{
            console.log("Lost!");
            losses++;
            }
}
console.log("Wins:", wins, "Losses:", losses, "Draw:", ties);