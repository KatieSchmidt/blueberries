var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Four a Day Berries' });
});

router.get('/berries', (req, res, next) => {
  res.render('blueberries');
});

router.get('/bakedGoods', (req, res, next) => {
  res.render('bakedGoodies');
});

router.get('/jarsOfYum', (req, res, next) => {
  res.render('jarsOfYum');
});

router.get('/baskets', (req, res, next) => {
  res.render('baskets');
});

module.exports = router;
