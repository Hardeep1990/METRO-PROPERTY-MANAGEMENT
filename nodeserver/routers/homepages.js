const { HomePage } = require("../models/homepage");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const homepage = await HomePage.find();
  res.send(homepage);
});
router.post("/", async (req, res) => {
  const homepage = await new HomePage({
    landingPageText: req.body.landingPageText,
    landingPageImg: req.body.landingPageImg,
    getInTouchSectionImg: req.body.getInTouchSectionImg,
    aboutMetroText: req.body.aboutMetroText,
    ourServiceImg: req.body.ourServiceImg,
  });
  homepage.save();
  res.send(homepage);
});

module.exports = router;
