const { Console } = require("console");
const path = require("path");

console.log(path.sep);

const filePath = path.join("/text", "jokowi", "mamank.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "text", "jokowi", "mamank.txt");
console.log(absolute);
