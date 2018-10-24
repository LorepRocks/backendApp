'use strict';
const Course = require('./course');
const StudentDB = require('../student/studentDAL');

const getCoursesByTeacherQuery = `select C.id, C.name 
from Course C
INNER JOIN TeachersCourses TC on TC.courseId = C.id
INNER JOIN Teachers T on TC.teachersId = T.id
WHERE T.cc = ?;`


exports.getCoursesByTeacher = (connection, callback, teacherId) => {
    const errorString = 'DAL ERROR GET COURSE BY TEACHER FAIL';
    connection.query(getCoursesByTeacherQuery, [teacherId], (err, courses) => {
        if(err){
            callback(errorString, null);
        }else{
            console.log('courses',courses);
            let promises = [];
            var i = 0;
            let studentsPromise = (response, reject) => {
                var course = courses[i];
                StudentDB.getStudentsByCourse(connection, (err, students) => {
                    if(err){
                        reject(err);
                    }else{
                        course.students = students;
                        response(course);
                    }
                }, course.id);
            }
            for(i = 0; i < courses.length; i++){
               promises.push(new Promise(studentsPromise));
            }
            Promise.all(promises).then((response) => {
                callback(null,response);
            }, (reason) => {
                callback(errorString + reason, null);
            }); 
        }
    });
}
