'use strict';

let createUserQuery = `INSERT INTO users(CC,firstname,lastname,password,profile_id) VALUES (?,?,?,?,?)`;
let getUserQuery = `SELECT U.CC, U.firstname, U.lastname, U.profile_id FROM users U where U.CC = ? and U.password= ?`;


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
