var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
console.log("test");

var app = express();
var server = http.Server(app);
var port = 5500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "Contact/mail.html")));

app.get("/", function(req , response){
    response.sendFile(path.join(__dirname, "Contact/mail.html"))
})

app.post("/send-mail", function(req , response){
    var from = req.body.from;
    var to = req.body.to;
    var subject = req.body.subject;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: 'white47white45@gmail.com',
                pass: 'dwdmfahtcujcpilw'
        }
    })    
})

server.listen(port, function(){
    console.log("Listening to port: " + port)
})