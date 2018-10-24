'use strict';


var Message = function(id,content,studentId, studentFirstname, studentLastname, teacherId, teacherFirstname, teacherLastname, attendantId, sendDate, isOpen) {
    this.id = id;
    this.content = content;
    this.studentId = studentId;
    this.studentFirstname = studentFirstname;
    this.studentLastname = studentLastname;
    this.teacherId = teacherId;
    this.teacherFirstname = teacherFirstname;
    this.teacherLastname = teacherLastname;
    this.attendantId = attendantId;
    this.sendDate = sendDate;
    this.isOpen = isOpen;
};

module.exports = Message;