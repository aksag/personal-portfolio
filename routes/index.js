var express = require("express");
var router = express.Router();
var dbHelper = require("../helpers/database-operations");

const Users = require("../models/user-model");
const dataToView = { userSession: null };

router.get("/", function (req, res, next) {
  res.render("index",dataToView);
});
router.get("/about", (req, res, next) => {
  res.render("about",dataToView);
});
router.get("/projects", (req, res, next) => {
  res.render("project",dataToView);
});
router.get("/services", (req, res, next) => {
  res.render("service",dataToView);
});
router.get("/contact", (req, res, next) => {
  res.render("contact",dataToView);
});
router.get("/logout", (req, res, next) => {
  req.session.destroy();
  res.redirect("/");
});
router.get("/login", (req, res, next) => {
  res.render("login",dataToView);
});
router.post("/login", (req, res, next) => {
  let userData = req.body;
  Users.findOne({
    username: userData.username,
    password: userData.password,
  })
    .exec()
    .then((response) => {
      if (response) {
        req.session.userSession = response;
        console.log(req.session.userSession);
        res.redirect("/user/contact-list");
      } else {
        req.session.userSession = null;
        res.redirect("/login");
      }
    });
});



module.exports = router;
