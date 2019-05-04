var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/publish', function(req, res, next) {
  res.render('publish', { title: 'Express' });
});

module.exports = router;
