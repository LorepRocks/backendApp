'use strict';

const Teacher = require('./teacher');
const CourseDB = require('../course/courseDAL');


exports.getTeacherInfo = (connection, callback, teacherId) => {
    var errorString = "DAL Error getTeacherInfo: ";
  
    CourseDB.getCoursesByTeacher(connection, (err, response) => {
        if(err){
            callback(errorString + err, null);
        }
        let teacher = null;
        if(response.length > 0){
                teacher = new Teacher(
                teacherId,
                response
            );   
        }
        callback(null, teacher);
    },teacherId);
}