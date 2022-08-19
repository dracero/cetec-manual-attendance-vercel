var mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  course: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  }
});

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  attendances: [
    attendanceSchema
  ]
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
