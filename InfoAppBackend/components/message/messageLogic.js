'use strict';

const MessageDB = require('./messageDAL');
const config = require('../../config/dbUtils');
const pool = require('../../config/utils');

exports.saveMessage = (callback, messageObject) => {
    var errorString = 'Logic Error User Create Fail';

    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            MessageDB.saveMessage(connection, (err, message) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    callback(null, message);
                }
            },messageObject);
        }else{
            connection.release();
            callback(errorString + err, null);
        }
    });
}

exports.getMessageForAttendant = (callback, attendantId) => {
    var errorString = 'Logic Error User Create Fail';

    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            MessageDB.getMessagesForAttendant(connection, (err, messages) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    callback(null, messages);
                }
            },attendantId);
        }else{
            connection.release();
            callback(errorString + err, null);
        }
    });
}

exports.updateMessage = (callback, messageId) => {
    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            MessageDB.updateMessage(connection, (err, messages) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    callback(null, messages);
                }
            },messageId);
        }else{
            connection.release();
            callback(errorString + err, null);
        }
    });
}
