var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/homepage', { title: 'SeaLab', logoLink: '/#topofpage' });
});

/* GET projects. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'SeaLab | Projects', logoLink: './'});
});

/* GET Loom & Leaf. */
router.get('/loomandleaf', function(req, res, next) {
  res.render('pages/loomandleaf', { title: 'SeaLab | Loom & Leaf', logoLink: './', previous: './sailsjs', next: './snapkitchen' });
});

/* GET Snap Kitchen. */
router.get('/snapkitchen', function(req, res, next) {
  res.render('pages/snapkitchen', { title: 'SeaLab | Snap Kitchen', logoLink: './', previous: './loomandleaf', next: './sailsjs' });
});

/* GET Sails. */
router.get('/sailsjs', function(req, res, next) {
  res.render('pages/sailsjs', { title: 'SeaLab | Sails.js', logoLink: './', previous: './snapkitchen', next: './loomandleaf' });
});

module.exports = router;
