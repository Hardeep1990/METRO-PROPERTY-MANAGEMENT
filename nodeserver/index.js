const home = require("./routers/homepages");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://mongo:27017/mission5database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Coneected to the database..."))
  .catch((err) => {
    console.error("Connection error: ", err);
  });

app.use("/api/home", home);

app.listen(port, () => {
  console.log("listening on port:", port);
});
