'use strict';

const Message = require('../message/message');
const saveMessageQuery = `INSERT INTO messages(content,teacherId,studentId,attendantId) VALUES (?,?,?,?)`;
const getMessagesforAttendantQuery = `
select M.id, M.content, M.send_date as sendDate, M.isOpen, S.id as studentId, S.firstname as studentFirstname, S.lastname as studentLastname, T.id as teacherId, 
U.firstname as teacherFirstname, U.lastname as teacherLastName
FROM Messages M
inner join Students S on M.studentId = S.id
inner join Teachers T on M.teacherId = T.cc
inner join Users U on T.cc = U.cc
inner join Attendant A on M.attendantId = A.id
where A.cc = ? order by M.send_date desc`;

const updateMessageOpenQuery = `UPDATE messages set isOpen = 1 where id = ?`;

exports.saveMessage = (connection, callback, message) => {
    const errorString = 'DAL ERROR SAVE MESSAGE FAIL';
   
    connection.query(saveMessageQuery, [message.content, message.teacherId, message.studentId, message.attendantId], (err, rows) => {
        if(err){
            callback(errorString, null);
        }else{
            callback(null,'Mensaje Enviado Exitosamente');
        }
    });
}

exports.getMessagesForAttendant = (connection, callback, attendantId) => {
    const errorString = 'DAL ERROR GET MESSAGE FAIL';
   
    connection.query(getMessagesforAttendantQuery, [attendantId], (err, rows) => {
        if(err){
            callback(errorString, null);
        }else{
            var messages = [];
            for(var i = 0; i< rows.length; i++){
                var message = new Message(
                    rows[i].id,
                    rows[i].content,
                    rows[i].studentId,
                    rows[i].studentFirstname,
                    rows[i].studentLastname,
                    rows[i].teacherId,
                    rows[i].teacherFirstname,
                    rows[i].teacherLastName,
                    rows[i].attendantId,
                    rows[i].sendDate,
                    rows[i].isOpen
                );
                messages.push(message);
                console.log('messages', messages);
            }
            callback(null,messages);
        }
    });
}


exports.updateMessage = (connection, callback, messageId) => {
    const errorString = 'DAL ERROR UPDATE MESSAGE FAIL';
   
    connection.query(updateMessageOpenQuery, [messageId], (err, rows) => {
        if(err){
            callback(errorString, null);
        }else{
            callback(null,'Mensaje Actualizado Exitosamente');
        }
    });
}

