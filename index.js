//Setting up express server
const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

//Setting view engine
app.set("view engine", "ejs");

app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("./assets"));

// Routes
app.use("/", require("./routes"));

// Checking server connection
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
