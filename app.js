const path = require("path")
const express = require('express')
const app = express()
const cors = require('cors')
const publicDirectoryPath = path.join(__dirname, "public")

let scores = []

app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get("/scores", (req, res) => {
  // scores = scores.sort((a,b) => (b.score - a.score));
  // scores = scores.slice(0,3);
  res.send(scores)
});

app.post("/scores", (req, res) => {
  scores.push(req.body);
  console.log(req.body)
  scores = scores.sort((a,b) => (b.playerScore - a.playerScore));
  scores = scores.slice(0,3);
  console.log(scores)
  res.status(201);
  res.end();
});

app.listen(3000);