var express = require('express');
var router = express.Router();

// Handle 'index' page
router.get('/', function(req, res, next) {
  // Render 'index' template with given title value
  res.render('index', { title: 'NodeJS Site' });
});

module.exports = router;
