var express = require("express");
var router = express.Router();
var Contacts = require("../models/contact-model");

const checkForLogin = (req, res, next) => {
  if (req.session.userSession) {
    next();
  } else {
    res.redirect("/");
  }
};

router.get("/contact-list", checkForLogin, (req, res, next) => {
  Contacts.find()
    .sort({ name: 1 })
    .then((result) => {
      res.render("contact-list", {
        userSession: req.session.userSession,
        contacts: result,
      });
    });
});
router.get("/modify-contact/:id", checkForLogin, (req, res, next) => {
  let id = req.params.id;
  Contacts.findOne({ _id: id })
    .exec()
    .then((result) => {
      res.render("update-contact", {
        userSession: req.session.userSession,
        contact: result,
      });
    });
});
router.post("/modify-contact/:id", checkForLogin, (req, res, next) => {
  let id = req.params.id;
  Contacts.updateOne({ _id: id }, { $set: req.body }).then(() => {
    res.redirect("/user/contact-list");
  });
});
router.get("/delete-contact/:userId", checkForLogin, (req, res, next) => {
  let userId = req.params.userId;
  Contacts.deleteOne({ _id: userId })
    .exec()
    .then(() => {
      res.redirect("/user/contact-list");
    });
});

module.exports = router;
