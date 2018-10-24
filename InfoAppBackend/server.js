'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3360;


//app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());


require('./components/user/userRoutes')(app);
require('./components/teacher/teacherRoutes')(app);
require('./components/message/messageRoutes')(app);


app.listen(port,function(){
    console.log("Server is running on port: "+port);
});

