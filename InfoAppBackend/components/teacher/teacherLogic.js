'use strict';
const TeacherDAL = require('./teacherDAL');

const config = require('../../config/dbUtils');
const pool = require('../../config/utils');

exports.getTeacherInfo = (callback, teacherId) => {
    var errorString = 'Logic Error User Create Fail';

    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            TeacherDAL.getTeacherInfo(connection, (err, message) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    callback(null, message);
                }
            },teacherId);
        }else{
            connection.release();
            callback(errorString + err, null);
        }
    },);
}