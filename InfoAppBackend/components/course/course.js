'use strict';

/**
 * 
 * @param {*} id 
 * @param {*} name 
 * @param {*} students Array type Student
 */
var Course = function(id,name,students) {
    this.id = id;
    this.name = name;
    this.students = students;
};

module.exports = Course;