var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gopali Youth Welfare Society',
                        top_image: 'header-bg.jpg',
                        atag:'#about-uss'});
});

/* GET about-us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'GYWS | About Us',
                        top_image: 'header-bg.jpg',
                        atag:'about#about-uss'});
});

/* GET jvm page. */
router.get('/jvm', function(req, res, next) {
  res.render('jvm', { title: 'GYWS | JVM',
                        top_image: 'header-bg.jpg',
                        atag:'about#about-uss'});
});

/* GET prayas page. */
router.get('/prayas', function(req, res, next) {
  res.render('prayas', { title: 'GYWS | Prayas',
                        top_image: 'header-bg.jpg',
                        atag:'about#about-uss'});
});

/* GET udyat page. */
router.get('/udyat', function(req, res, next) {
  res.render('udyat', { title: 'GYWS | Udyat',
                        top_image: 'header-bg.jpg',
                        atag:'about#about-uss'});
});
module.exports = router;
