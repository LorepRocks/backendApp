'use strict';

const Student = require('./student');
const AttendantDB = require('../Attendant/attendantDAL');

const getStudentsByCourseQuery = `select S.id, S.firstname, S.lastname
from Students S
INNER JOIN Course C on S.courseId = C.id
WHERE C.id = ?`;


exports.getStudentsByCourse = (connection, callback, courseId) => {
    const errorString = 'DAL ERROR GET STUDENTS BY COURSE FAIL';
    connection.query(getStudentsByCourseQuery, [courseId], (err, students) => {
        if(err){
            callback(errorString, null);
        }else{
            let promises = [];
            var i = 0;
            let AttendantsPromise = (response,reject) =>{
                let student = students[i];
                AttendantDB.getAttendantByStudent(connection, (err, attendant) => {
                    if(err){
                        reject(err);
                    }else{  
                        student.attendant = attendant;
                        response(student);
                    }
                },student.id);
            }
            for(i = 0; i< students.length ; i++){
                promises.push(new Promise(AttendantsPromise));
            }
            Promise.all(promises).then((response)=>{
                callback(null,response);
            }, (reason) => {
                callback(errorString + reason , null);
            });     
        }
    });
}
