'use strict';

let app = require('../expressApp.js');

let rootUrl = process.env.rootUrl || ("localhost:" + (process.env.PORT || 1227));
rootUrl = rootUrl.endsWith("/") ? rootUrl.slice(0, -1) : rootUrl;

let searchUrl = rootUrl += "/table-input/search";

app.get('/table-input', function (req, res) {
	res.json({
		"icon": "grid_on",
		"schema": {
			"title": "Table with Polymer Components",
			"type": "object",
			"properties": {
				"tableValue": {
					"type": "polymer",
					"extended-type": "forge-table-input"
				}
			}
		},
		"search": searchUrl
	});
});