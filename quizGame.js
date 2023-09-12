// npm install prompt-sync
// prompt function - to take user input
// prompt 'require' to import prompt module

const prompt = require("prompt-sync")();

console.log("\tW E L C O M E !\n");

let correctAnswers = 0;
const totalQuestions = 5;

// display question
const q1 = prompt("1.The action of doing something over and over again. A.Function B.Loop Answer: ");
const correctAnswer1 = "B";
// choose the correct answer
if (q1.toUpperCase() === correctAnswer1 ){
    console.log("You got it correct!🥳");
    correctAnswers++;
}
else {
    console.log("You got it wrong...☹️");
};

const q2 = prompt("2.A number assigned to any item that is connected to the Internet. A.Binary B.IP Address Answer: ");
const correctAnswer2 = "B";
// choose the correct answer
if (q2.toUpperCase() === correctAnswer2 ){
    console.log("You got it correct!🥳");
    correctAnswers++;
}
else {
    console.log("You got it wrong...☹️");
}

const q3 = prompt("3.Trying again and again, even when something is very hard. A.Persistence B.Determination Answer: ");
const correctAnswer3 = "A";
// choose the correct answer
if (q3.toUpperCase() === correctAnswer3 ){
    console.log("You got it correct!🥳");
    correctAnswers++;
}
else {
    console.log("You got it wrong...☹️");
}

const q4 = prompt("4.The art of creating a program. A.Programming B.Coding Answer: ");
const correctAnswer4 = "A";
// choose the correct answer
if (q4.toUpperCase() === correctAnswer4 ){
    console.log("You got it correct!🥳");
    correctAnswers++;
}
else {
    console.log("You got it wrong...☹️");
}

const q5 = prompt("5. In coding this returns a value. A.Function B.Loop Answer: ");
const correctAnswer5 = "A";
// choose the correct answer
if (q5.toUpperCase() === correctAnswer5 ){
    console.log("You got it correct!🥳");
    correctAnswers++;
}
else {
    console.log("You got it wrong...☹️");
}

const percent = Math.round((correctAnswers/totalQuestions)*100);

console.log("Congratulations!🎉 You got",correctAnswers, "questions correct!");
console.log("You score",percent.toString() + "%!🙌🏽");
