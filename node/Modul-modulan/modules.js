// modules
const mamank = "asep kenalpot";
const jokowi = "jokowi";

const sayHi = (name , name2) => {
  if (name2) {
    console.log(`Hello ${name} and ${name2}`);
  } else {
    console.log(`Hello there ${name}`);
  }
};

module.exports = { mamank, jokowi, sayHi };
