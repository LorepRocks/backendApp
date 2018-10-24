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

exports.searchUser = (callback, cc, password) => {
    var errorString = 'Logic Error Search User Fail';
    pool.getConnection(config.db, (err, connection) => {
        if(!err){
            UserDAL.searchUser(connection, (err, user) => {
                connection.release();
                if(err){
                    callback(err, null);
                }else{
                    if(user.cc){
                        callback(null, user);
                    }else{1
                        callback(null, 'Error Usuario y/o Contraseña Incorrectos');
                    }
                }
            }, cc, password)
        }else{
            callback(errorString + err, null);
        }
    });
}