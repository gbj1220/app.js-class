const express = require("express");
const app = express();
const PORT = process.eventNames.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false })) // parse incoming data

let teamArray = [];

// REQ = Request -incoming and res = response - going out 
// middleware = give abilities to our application
// params e.g /team/:anyname

app.get("/", function (req, res) {
  res.status(200).json({
    hello: "Greeting from EXPRESS",
  })
});

app.get('/team/get-team-data', function (req, res) {
  res.status(200).json({ data: teamArray })
});

app.get('/team/:anyname', function (req, res) {
  console.log(req.params);
  res.status(200).json(req.params)
});

app.get("/:nothing/:team", function (req, res) {
  console.log(req.params)
  res.status(200).send("You hit the team path")
});

app.post("/team/create-team", function (req, res) {
  teamArray.push(req.body)
  res.status(200).json({ data: teamArray });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});