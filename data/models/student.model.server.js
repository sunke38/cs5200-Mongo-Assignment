const mongoose = require('mongoose');
const studentSchema = require('./student.schema.server');
const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;