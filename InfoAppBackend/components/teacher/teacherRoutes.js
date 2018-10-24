'use strict';

const teacherService = require('./teacherService');

module.exports = (app) => {
    app.route('/api/getTeacherInfo').post(teacherService.getTeacherInfo);
}