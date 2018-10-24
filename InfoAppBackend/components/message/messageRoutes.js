'use strict';

const messageService = require('./messageService');

module.exports = (app) => {
    app.route('/api/saveMessage').post(messageService.saveMessage);
    app.route('/api/getMessages').post(messageService.getMessageForAttendant);
    app.route('/api/updateMessage').post(messageService.updateMessage);
}