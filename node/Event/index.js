const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Response received ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
    console.log("Response received again");
});
customEmitter.emit("response", "Hello", 54);

