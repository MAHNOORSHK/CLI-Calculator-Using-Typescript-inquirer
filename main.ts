import chalk from "chalk";
import inquirer from "inquirer";

let Num1 = await inquirer.prompt([{
    name: "Number1",
    type: "number",
    message: "Enter the first value:"}
]);

let Num2 = await inquirer.prompt([{
    name: "Number2",
    type: "number",
    message: "Enter the Second value:"}
]);


console.log(chalk.red('Add the value of Num1 and Num2 is ' + chalk.bgRed([Num1.Number1+Num2.Number2])));
console.log(chalk.green('Subtract the value of Num1 and Num2 is ' + chalk.bgGreen([Num1.Number1-Num2.Number2])));
console.log(chalk.yellow('Multiply the value of Num1 and Num2 is ' + chalk.bgYellow([Num1.Number1*Num2.Number2])));
console.log(chalk.blue('Divide the value of Num1 and Num2 is ' + chalk.bgBlue([Num1.Number1/Num2.Number2])));
console.log(chalk.magenta('Modulus the value of Num1 and Num2 is ' + chalk.bgMagenta([Num1.Number1%Num2.Number2])));
