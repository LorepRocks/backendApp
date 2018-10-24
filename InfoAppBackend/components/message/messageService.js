'use strict';
const Message = require('./message');
const MessageLogic = require('./messageLogic');

exports.saveMessage = (req, res) => {
    const errorString = 'Service Save Message Error Fail';
    const messageObject = new Message(null, req.body.content, req.body.studentId,null,null, req.body.teacherId,null,null,req.body.attendantId,null,null);
    console.log('user object', messageObject);
    MessageLogic.saveMessage((err, message) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: message
            });
        }
    },messageObject);
}

exports.getMessageForAttendant = (req, res) => {
    const errorString = 'Service Save Message Error Fail';
    MessageLogic.getMessageForAttendant((err, messages) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: messages
            });
        }
    },req.body.attendantId);
}

exports.updateMessage = (req, res) => {
    const errorString = 'Service Save Message Error Fail';
    MessageLogic.updateMessage((err, messages) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: messages
            });
        }
    },req.body.messageId);
}