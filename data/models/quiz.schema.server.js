const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server')
const quiz = mongoose.Schema({
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: 'quiz'});
module.exports = quiz;