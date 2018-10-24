'use strict';
const TeacherLogic = require('./teacherLogic');

exports.getTeacherInfo = (req, res) => {
    const errorString = 'Service search Error Fail';
    
    TeacherLogic.getTeacherInfo((err, message) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: message
            });
        }
    },req.body.cc);
}