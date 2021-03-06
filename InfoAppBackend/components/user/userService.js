'use strict';
const UserLogic = require('./userLogic');
const User = require('./user');

exports.createUser = (req, res) => {
    const errorString = 'Service create Error Fail';
    const user = new User(req.body.cc, req.body.firstname, req.body.lastname,req.body.password,req.body.profileId);
    console.log('user object', user);
    UserLogic.createUser((err, message) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: message
            });
        }
    },user);
}

exports.searchUser = (req, res) => {
    const errorString = 'Service search Error Fail';
    
    UserLogic.searchUser((err, message) => {
        if(err){
            return res.status(400).send({
                message: errorString + err
            });
        }else{
            return res.status(200).send({
                message: message
            });
        }
    },req.body.cc, req.body.password);
}
