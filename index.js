#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter  your first number:", type: "number", name: "firstnumber" },
    { message: "select any of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["(+)Addition", "(-)Substraction", "(*)Multiplication", "(/)Division", "(**)Exponentation", "(%)modulus"] },
    { message: "enter your second number:", type: "number", name: "secondnumber" },
]);
if (answer.operator === "(+)Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "(-)Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "(*)Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "(/)Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "(**)Exponentation") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else if (answer.operator === "(%)modulus") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else {
    console.log('the operator is not valid');
}
