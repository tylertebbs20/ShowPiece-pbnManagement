var express = require('express');
var app = express();
var port = 8888;
var cors = require('cors');
var bodyParser = require('body-parser');
var Mozscape = require('mozscape').Mozscape;
var mongoUri = 'mongodb://localhost:27017/pbn'
var mongoose = require('mongoose');
var Firebase = require('firebase');
mongoose.connect(mongoUri);
var dataCtrl = require('./controllers/dataCtrl');

app.use(bodyParser.json());
app.use(express.static(__dirname +'/app'));
app.use(cors());

var moz = new Mozscape('mozscape-737c88c173', '398b11d709d84e88e47be269f348f0c5');

app.get('/sitemetrics', dataCtrl.getMetrics);

app.listen(port, function() {
	console.log('listening on', port)
});