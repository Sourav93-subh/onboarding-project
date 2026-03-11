const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});