var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var routes = require('./api/routes/myroutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on port ' + port);