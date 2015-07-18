"use strict";

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.redirect('/ui.html');
});
app.get('/endpoint', function (req, res) {
    res.status(200).json(process.env.BALLAPI_ENDPOINT);
});

var server = app.listen(process.env.PORT || 3001, "0.0.0.0", function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});