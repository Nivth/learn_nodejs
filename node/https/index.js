// with navbar
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar/index.html");
const homeStyle = readFileSync("./navbar/styles.css");
const homeScript = readFileSync("./navbar/browser-app.js");
const homeSvg = readFileSync("./navbar/logo.svg");
const aboutPage = readFileSync("./page/about.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(/*"<h1>About Page</h1>"*/ aboutPage);
    res.end();
  }
  // style
  else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // script
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(homeScript);
    res.end();
  }
  // svg
  else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeSvg);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});
server.listen(5000);
