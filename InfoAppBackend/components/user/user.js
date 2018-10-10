'use strict';

/**
 * 
 * @param {*} cc 
 * @param {*} firstname 
 * @param {*} lastname 
 * @param {*} password 
 * @param {*} profileId 
 */
var User = function(cc,firstname,lastname,password,profileId) {
    this.cc = cc;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.profileId = profileId;
};

module.exports = User;