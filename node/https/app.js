const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./page/index.html");
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
  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});
server.listen(5000);
