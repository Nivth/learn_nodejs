//Async
//sync
const { readFile, writeFile } = require("fs");

readFile("./text/first.txt", "utf8", (err, first) => {
  if (err) throw err;
  readFile("./text/second.txt", "utf8", (err, second) => {
    if (err) throw err;
    readFile("./text/third.txt", "utf8", (err, third) => {
      if (err) throw err;
      console.log(`${first}, ${second}`);
      console.log(third);
      writeFile(
        "./text/third.txt",
        `Here is the result: ${first}, ${second}`,
        (err) => {
          if (err) throw err;
          console.log("File written");
        }
      );
    });
  });
});
