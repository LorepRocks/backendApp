'use strict';

const Attendant = require('./attendant');

const getAttendantByStudentQuery = `select A.id, A.firstname, A.lastname
from Attendant A
inner join Students S on S.attendantId = A.id
where S.id = ?`

exports.getAttendantByStudent = (connection, callback, studentId) => {
    const errorString = 'DAL ERROR GET ATTENDANT BY STUDENT FAIL';
   
    connection.query(getAttendantByStudentQuery, [studentId], (err, rows) => {
        if(err){
            callback(errorString, null);
        }else{
            let attendant = null;
            if(rows[0]){
                    attendant = new Attendant(
                    rows[0].id,
                    rows[0].firstname,
                    rows[0].lastname
                )
            }
            callback(null,attendant);
        }
    });
}