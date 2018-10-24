'use strict';

/**
 * 
 * @param {*} id 
 * @param {*} firstname 
 * @param {*} lastname 
 * @param {*} attendant Object type Attendant
 */
var Student = function(id,firstname,lastname,attendant) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.attendant = attendant;
};

module.exports = Student;