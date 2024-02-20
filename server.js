const express = require("express");
const app = express();
const pornum = 8088;
const booksRouter = require("./router/book");
const aboutRouter = require("./router/about");

app.get("/", (req, res) => {
  //res.send("hi, i'm node.js");
  const text = JSON.stringify(req.query);
  res.send(text);
  console.log(req.query);
  //console.log(typeof req.query.fruit);
});
app.use("/books", booksRouter);
//app.use("/about", aboutRouter);
app.listen(pornum, () => {
  console.log(`sever is running at localhost:${pornum}`);
});
