var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//allows for css//
app.use(express.static(path.join(__dirname, './app/public'))); 

//requires the routes files//
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);
require("./app/data/friends.js");
//connection.js file is needed to connect to mysql, must add a require//
app.listen(PORT, function(req, res){
	console.log("app is listening on port" + PORT);
});