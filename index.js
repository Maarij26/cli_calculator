import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    { message: "Select one of the given operators", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] },
]);
if (answer.operator === "addition") {
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "division") {
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("Enter a valid operator");
}
