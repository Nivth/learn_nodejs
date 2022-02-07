//global - No windows !!!!

// __dirname - path to current directory
// __Filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

const modules = require("./modules");
const data = require("./alternative/index");
const { mamank, jokowi, sayHi } = modules;
const myItem = `my item is ${data.item[0]}, ${data.item[1]} and ${data.item[2]}`;
const introduction = `my name is ${data.singlePerson.name}, i'am ${data.singlePerson.age} years old , and nice to meet you `;

console.log(introduction);
console.log(myItem);
sayHi(jokowi, mamank);
