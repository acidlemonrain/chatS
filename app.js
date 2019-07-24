var app = require('express')();
var cors = require('cors');
app.use(cors());
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
	res.json(1);
});
require('./consumer.js')(io);

server.listen(8001);
