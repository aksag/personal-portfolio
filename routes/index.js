var express = require("express");
var router = express.Router();
var dbHelper = require('../helpers/database-operations')


router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/about", (req, res, next) => {
  res.render("about");
});
router.get("/projects", (req, res, next) => {
  res.render("project");
});
router.get("/services", (req, res, next) => {
  res.render("service");
});
router.get("/contact", (req, res, next) => {
  res.render("contact");
});

router.get("/login", (req, res, next) => {
  res.render("login");
});
router.post("/login", (req, res, next) => {
  let userData = req.body;
  dbHelper.createUser(userData,(response)=>{
    console.log(response);
  })
  // console.log(userData);
});

module.exports = router;
