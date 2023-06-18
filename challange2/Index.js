const readline = require("readline");
const checkspeed =require("./checkspeed");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});


rl.question("Enter the car's speed:",(speed) => {
    console.log(CheckSpeed));
    rl.close();
});