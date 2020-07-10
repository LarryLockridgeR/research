var express = require('express');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();
var setupController = require ('./controllers/setupControllers');
var apiControler = require('./controllers/apiController');
var personControler = require('./controllers/personControler');
var officialController = require('./controllers/officialController');


var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.use(function (req,res,next) {
    console.log("URL: ", req.originalUrl)
    next();
})

mongoose.connect(config.getDbConnectionString(),config.getOptions(),function(err){console.log('========',err,'=======')});

personControler(app);
setupController(app);
apiControler(app);
officialController(app);

app.listen(port);
