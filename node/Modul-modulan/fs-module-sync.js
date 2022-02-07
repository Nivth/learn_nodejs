//sync
const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs');
// fs.read
// fs.write
const first = readFileSync("./text/first.txt", "utf8");
const second = readFileSync("./text/second.txt", "utf8");
const third = readFileSync("./text/third.txt", "utf8");

console.log(`${first}, ${second}`);
console.log(third);
writeFileSync("./text/third.txt", `Here is the result: ${first}, ${second}`/*,{flag: "a"}*/);
