var express = require('express');
var router = express.Router();

// Handle 'page' page
router.get('/', function(req, res, next) {

    // To test this, try going to /page?name=UserNameHere
    var uName = req.query.name;

    // Render 'page' template with given title and name values
    res.render('page', {
        title: 'NodeJS Site',
        name: uName
    });
});

module.exports = router;

