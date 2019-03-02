var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('members', { title: 'Members',
                        top_image: 'header-bg-2.jpg'});
});

module.exports = router;
