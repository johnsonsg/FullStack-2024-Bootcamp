//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
// import bodyParser from "body-parser";
/**
 * Note: bodyParser is not included with Express.js
 * So you can just use express.urlencoded() instead of bodyParser.urlencoded()
 */
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthenticated = false;
// Ref above:
app.use(express.urlencoded({ extended: true })); // when you want to get information from HTML Form.

function checkPassword(req, res, next) {
  console.log(req.body);
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthenticated = true;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  if (userIsAuthenticated) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
