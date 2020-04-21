const mongoose = require('mongoose');
const quizSchema = require('./question.schema.server');
const questionModel = mongoose.model('Question', quizSchema);
module.exports = questionModel;