const db = require("./config/connection");
const routes = require("./routes");
const express = require("express");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(port, () => {
    console.log("DB connected!");
  });
});
