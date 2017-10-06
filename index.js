var chalk = require('chalk');

var message = "My favourite colour is " + chalk.magenta.bold.underline.bgBlack.italic("PINK!");

console.log(message);