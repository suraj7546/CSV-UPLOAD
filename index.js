const express = require("express");

const PORT = 8000;
const router = require("./routes/router");
const db = require("./config/mongodb");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
app.use(router);
app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is running on port${PORT}`);
});
