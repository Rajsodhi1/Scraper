
var axios = require("axios");
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;


//logger
var logger = require("morgan");

// app.use(logger("dev")); not working??



//express router
var express = require("express");
var router = express.Router();
var app = express();

app.use(router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));



//handlebars
var expHandlebars = require("express-handlebars");

app.engine("handlebars", expHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");



//mongo/mongoose
var mongoose = require("mongoose");

var db = process.env.MONGODB_URI || "mongodb://localhost/scraper";
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Mongoose connection successful");
    }
});


//connect to localhost
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});