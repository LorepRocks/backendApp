'use strict';

const userService = require('./userService');

module.exports = (app) => {
    app.route('/api/createUser').post(userService.createUser);
    app.route('/api/searchUser').post(userService.searchUser);
}