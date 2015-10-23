var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/homepage', { title: 'SeaLab' });
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'SeaLab | Projects' });
});

/* GET Loom & Leaf. */
router.get('/loomandleaf', function(req, res, next) {
  res.render('pages/loomandleaf', { title: 'SeaLab | Loom & Leaf' });
});

/* GET Snap Kitchen. */
router.get('/snapkitchen', function(req, res, next) {
  res.render('pages/snapkitchen', { title: 'SeaLab | Snap Kitchen' });
});

/* GET Sails. */
router.get('/sailsjs', function(req, res, next) {
  res.render('pages/sailsjs', { title: 'SeaLab | Sails.js' });
});

module.exports = router;
