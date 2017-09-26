'use strict'

let path = require('path');
let app = require('./expressApp.js');

let bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:false
}));

let inputTable = require('./table-input/parts.js');

let port = process.env.PORT || 1227;

app.listen(port, function () {
	console.log('forge-table-input Website listening on port ' + port);
});

app.get('/', function (req, res) {
	res.status(200).send('Hello from forge-table-input');
});