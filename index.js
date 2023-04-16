const express = require("express");
const Todo_list_items = require("./models/todo_list_items");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded());

app.use(express.static("./assets"));

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
