var express = require('express');

var server = express();
server.set("view engine","vash")
server.get('/', function (req, res) {
    var market=process.env.MARKETS || 'Pally'
    res.render('index', { markets: market.split(","),image: process.env.IMAGE,url:process.env.PALLY_BACKEND_URL});
});
server.listen(process.env.PORT);