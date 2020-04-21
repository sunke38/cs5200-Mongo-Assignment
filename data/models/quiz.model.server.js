const mongoose = require('mongoose');
const quizSchema = require('./quiz.schema.server');
const quizModel = mongoose.model('Quiz', quizSchema);
module.exports = quizModel;