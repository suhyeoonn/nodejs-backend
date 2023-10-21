const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = [];
app.get("/", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { title, name, text } = req.body;
  posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
  res.json({ title, name, text });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const filteredPosts = posts.filter((post) => post.id !== +id);
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;

  if (isLengthChanged) {
    res.json("OK");
    return;
  }
  res.json("NOT CHANGED");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
