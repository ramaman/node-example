var express = require("express"),
    mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/booksAPI");

var Book = require('./models/Book');

var app = express();

var bookRouter = express.Router();

bookRouter.route("/books")
    .get(function(req, res){
        Book.find(function(err,books){
            if (err) {
                console.log(err);
            } else {
                res.json(books);
            }
        });
    });

app.use("/api/v1", bookRouter);

app.get("/", function(req,res){

    res.send("Hello, World!");

});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Gulp runs app at http://%s:%s', host, port);

});
