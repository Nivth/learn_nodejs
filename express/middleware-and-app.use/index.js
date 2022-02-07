const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;
const logger = require("./logger");
const authorize = require("./authorize");

//req => middleware => res

// this is middleware
// const logger = (req, res, next) => {
//   const method = req.method;
//   const time = new Date().getFullYear();
//   const url = req.url;
//   console.log(`${method} ${url} ${time}`);
//   next();
// };

//app.use untuk semua request
app.use([/*logger,*/ morgan("tiny")]);
// kalo lebih dari 1 pake [], kalau 1 pake ()

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});
//midleware dipake 1 doank
app.get("/secret", authorize, (req, res) => {
  res.send("<h1>Secret</h1>");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
