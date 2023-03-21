const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  landingPageText: String,
  landingPageImg: String,
  getInTouchSectionImg: String,
  aboutMetroText: String,
  ourServiceImg: String,
});
const HomePage = mongoose.model("Home", schema);

exports.HomePage = HomePage;
