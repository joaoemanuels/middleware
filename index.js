import express from "express";
import bodyParser from "body-parser";
import __dirname from "dirname";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
});

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`ouvindo a porta ${port}`);
})


