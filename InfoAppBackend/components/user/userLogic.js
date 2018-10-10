'use strict';

const config = require('../../config/dbUtils');
const pool = require('../../config/utils');
const UserDAL = require('../user/userDAL');

exports.createUser = (callback, user) => {
    var errorString = 'Logic Error User Create Fail';

    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            UserDAL.createUser(connection, (err, message) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    callback(null, message);
                }
            },user);
        }else{
            connection.release();
            callback(errorString + err, null);
        }
    });
}