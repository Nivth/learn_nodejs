const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;
let { people } = require("./data");

// static assets
app.use(express.static("public"));
//this is the keyyyyyyyy
app.use(express.urlencoded({ extended: false }));
//^

app.use(express.json());

//get method = get request
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//post method = create
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "No name provided" });
  } else {
    return res.status(201).json({ success: true, person: name });
  }
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  //first letter of name is capitalized
  const { name } = req.body;
  let namer = name.charAt(0).toUpperCase() + req.body.name.slice(1);
  if (namer === "") {
    res
      .status(401)
      .send(`<h1>Please enter your name</h1><a href="/">Go Back</a>`);
  } else if (namer === "Asep") {
    res
      .status(200)
      .send(`<h1>anying aya ${namer} kenalpot</h1><a href="/">Go Back</a>`);
  } else {
    res.status(200).send(`<h1>Welcome ${namer}</h1><a href="/">Go Back</a>`);
  }
});

// put method = update
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({success:true, data:newPeople})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
