const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    const text = fs.readFileSync("../text/lugowo.txt", "utfb8");
    res.end(text);
})
.listen(3000);