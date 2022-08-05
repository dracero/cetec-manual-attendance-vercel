var attendance = require("../models/attendance.js");

class BaseDeDatos {

    constructor(){
        this.attendanceModel = attendance;
    }

    async add_attendance(email, course, state, date) {
        const obj = JSON.stringify({email: email, course: course, state: state, date: date});
        const attendance_structure = new this.attendanceModel(JSON.parse(obj));
        attendance_structure.save();
        console.log("Se agrega el alumno a la lista de presentes.");
        return attendance_structure;
    }
}

module.exports = BaseDeDatos;
