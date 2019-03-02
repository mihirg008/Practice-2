var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gopali Youth Welfare Society',
                        top_image: 'header-bg.jpg'});
});

module.exports = router;
