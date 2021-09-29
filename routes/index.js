var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
  res.render('index');
});
router.get('/about', (req, res) => {
  res.render('about');
})
router.get('/projects', (req, res) => {
  res.render('project');
})
router.get('/services', (req, res) => {
  res.render('service');
})
router.get('/contact', (req, res) => {
  res.render('contact');
})

module.exports = router;
