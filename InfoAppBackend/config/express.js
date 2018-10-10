'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
/*const session = require('express-session');
const path = require('path');*/

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({
		extended : true
	}));
	app.use(bodyParser.json());
	//app.use(methodOverride());


    require('../components/user/userRoutes')(app);

    return app;

}