var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET publications page. */
router.get('/pubt', function(req, res, next) {
  res.render('pub_tot', { title: 'Express' });
});

module.exports = router;
