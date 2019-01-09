var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ab', function(req, res, next) {
  res.render('ab', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.post('/contact', function(req, res, next) {
  var a=req.body.name;
  console.log(a);
res.redirect('/',{msg:a});
  
});

module.exports = router;
