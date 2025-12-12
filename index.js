const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Working fine");
});

const users = [
  { id: 1, name: "Alice", email: "alice@gmail.com" },
  { id: 2, name: "Bob", email: "bob@gmail.com" },
  { id: 3, name: "Charlie", email: "charlie@gmail.com" },
  { id: 4, name: "David", email: "david@gmail.com" },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
