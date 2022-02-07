const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my website!");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a href="/">Go to home page</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
