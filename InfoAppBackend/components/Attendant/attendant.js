'use strict';

/**
 * 
 * @param {*} id 
 * @param {*} firstname 
 * @param {*} lastname 
 */
var Attendant = function(id,firstname,lastname) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
};

module.exports = Attendant;