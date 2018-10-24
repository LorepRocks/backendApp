'use strict';
const User = require('./user');
let createUserQuery = `INSERT INTO Users(CC,firstname,lastname,password,profile_id) VALUES (?,?,?,?,?)`;
let getUserQuery = `SELECT U.cc, U.firstname, U.lastname, U.profileId FROM Users U where U.cc = ? and U.password= ?`;


exports.createUser = (connection, callback, user) => {
    const errorString = 'DAL ERROR CREATE USER FAIL';
    const successString = 'Usuario Creado Correctamente';

    connection.query(createUserQuery, [user.cc,user.firstname,user.lastname,user.password,user.profileId], (err, rows) => {
        if(err){
            callback(errorString, null);
        }else{
            callback(null,successString);
        }
    });
}

exports.searchUser = (connection, callback, cc, password) => {  
    var errorString = "DAL Error searchUser: ";
    console.log('cc', cc);
    console.log('password', password);
    connection.query(getUserQuery, [cc,password], (err,rows) => {
        if(err){
            callback(errorString, null);
        }else{
            if(rows[0]){
                var user = new User(rows[0].cc,
                    rows[0].firstname,
                    rows[0].lastname,
                    null,
                    rows[0].profileId);
                    console.log('user', user);
                    callback(null, user);
            }else{
                callback(null, 'Usuario y/o contraseña incorrectos');
            }
           
        }
    });
}
