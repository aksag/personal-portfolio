var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/about', (req, res, next) => {
  res.render('about');
})
router.get('/projects', (req, res, next) => {
  res.render('project');
})
router.get('/services', (req, res, next) => {
  res.render('service');
})
router.get('/contact', (req, res, next) => {
  res.render('contact');
})

module.exports = router;
