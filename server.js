var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session')
var bp = require('body-parser');
var port = 8000;

app.use(bp.json());
app.use(session({
    secret: "foo",
    saveUninitialized: true,
    resave: true
}));
app.use(express.static(path.join(__dirname, '/client/dist'))) 


require('./server/config/mongoose')
require('./server/config/routes')(app)


app.listen(port, function () {
    console.log("listening from Port 8000");
})
