//var attendance = require("../models/attendance.js");
var student = require("../models/student.js");

class BaseDeDatos {

    constructor(){
        this.studentModel = student;
    }

    async add_attendance(email, course, state, date) {
        const obj = JSON.stringify({email: email});
        const student_structure = new this.studentModel(JSON.parse(obj));


        const newAttendance = {date: date, course: course, state: state};

        //student_structure.save();
        this.studentModel.findOneAndUpdate(
            { email: email },
            { $push: { attendances: newAttendance } },
            { upsert: true }
          ).exec();


        console.log("Se agrega el alumno a la lista de presentes.");
        return student_structure;
    }
}

module.exports = BaseDeDatos;
