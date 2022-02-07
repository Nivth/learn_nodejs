const { writeFileSync, createReadStream } = require("fs");
// this is for writeFileSync
// `for (let i = 0; i <= 10000; i++) {
//   writeFileSync(`../text/lugowo.txt`, `lugowo yo jing yu nong incing ${i}\n`, {
//     flag: "a",
//   });
// }`

//====this is for read the file
const stream = createReadStream("../text/lugowo.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
stream.on("data", (chunk) => {
  console.log(chunk);
});
stream.on("error", (err) => {
  console.log(err);
});
