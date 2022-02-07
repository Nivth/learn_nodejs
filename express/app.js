const express = require("express");
const path = require("path");
const app = express();

//bner
app.use(express.static("./public"));
//bner

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// adding to static assets
// SSR(server side rendering)
// });

// ========wrong========
// app.get("./styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname, "./navbar/styles.css"));
// })

// app.get("./browser-app.js", (req, res) => {
//     res.sendFile(path.join(__dirname, "./navbar/browser-app.js"));
// })
// ========wrong========

app.all("*", (req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
