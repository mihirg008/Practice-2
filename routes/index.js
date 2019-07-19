var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var multer = require('multer');
var path = require('path');
var mysql = require('mysql');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
// Init Upload
const upload = multer({
  storage: storage,
}).single('myimage');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1111',
  database : 'members'
});


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

router.get('/member', function(req,res){
  res.render('member');
});

router.post('/member', urlencodedParser, function (req, res) {
  upload(req, res, (err) => {
    if(err){
      res.render('member', {msg: err});
      console.log(err)
    } else {
      console.log(req.file);
      console.log(req.body);
      var sql = "INSERT INTO dummy (Fname, LName, Country, Img) VALUES ?";
      var values = [[req.body.firstname, req.body.lastname, req.body.country, req.file.filename]];
      db.query(sql, [values],function(err){
           if (err) throw err;
        //   console.log("Number of records inserted: " + result.affectedRows);
         });

    }
  });

});
module.exports = router;
