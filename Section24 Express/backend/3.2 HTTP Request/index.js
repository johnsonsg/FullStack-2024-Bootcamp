import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><p>Welcome to my website</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1><p>Learning about Node Express</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1><p>Contact me whenever</p>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
