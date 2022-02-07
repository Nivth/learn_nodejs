// gwej milih sync sih tapi tapi tapi 
const { readFileSync, writeFileSync, writeFile } = require("fs");
console.log("start");
const first = readFileSync("./text/first.txt", "utf8");
const second = readFileSync("./text/second.txt", "utf8");

writeFileSync("./text/third.txt", `Here is the result: ${first}, ${second}`, {
  flag: "a",
});
console.log("done with sync");
console.log("start the next one")