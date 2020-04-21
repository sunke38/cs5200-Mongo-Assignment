const studentModel = require( '../models/student.model.server' )
const questionModel = require( '../models/question.model.server' )
const answerModel = require('../models/answer.model.server')
const quizModel = require('../models/quiz.model.server')

truncateDatabase = () => {
    return Promise.all([
    answerModel.deleteMany().exec(),
    questionModel.deleteMany().exec(),
    quizModel.deleteMany().exec(),
    studentModel.deleteMany().exec()
    ]);
};


//find
//student
findStudentById = (id) => studentModel.findById(id);
findAllStudents = () => studentModel.find();

//question
findQuestionById = (id) => questionModel.findById(id);
findAllQuestions = () => questionModel.find();

//answer
findAnswerById = (id) => answerModel.findById(id);
findAllAnswers = () => answerModel.find();
findAnswersByStudent = (studentId) => answerModel.find({student: studentId});
findAnswersByQuestion = (questionId) => answerModel.find({question: questionId});

//create
createStudent = (student) =>studentModel.create(student);
createQuestion = (question) =>questionModel.create(question);
answeredQuestion = (studentId, questionId, answer)=> {
    answer.student = studentId;
    answer.question = questionId;
    answerModel.create(answer);
};

//deleted
deleteStudent = (studentId) => studentModel.findByIdAndDelete(studentId);
deleteQuestion = (questionId) =>questionModel.findByIdAndDelete(questionId);
deleteAnswer = (answerId) => answerModel.findByIdAndDelete(answerId);

populateDatabase = () => {
    return Promise.all([
    createQuestion({
        _id: 3,
        question: 'Is the following schema valid?',
        points: 10,
        questionType: 'TrueOrFalse',
        choices: null,
        correct: null,
        isTrue: false
    }),
    createQuestion({
        _id: 4,
        question: 'DAO stands for Dynamic Access Object.',
        points: 10,
        questionType: 'TrueOrFalse',
        choices: null,
        correct: null,
        isTrue: false
    }),
    createQuestion({
        _id: 5,
        question: 'What does JPA stand for?',
        points: 10,
        questionType: 'MultipleChoice',
        choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations',
        correct: 1,
        isTrue: null
    }),
    createQuestion({
        _id: 6,
        question: 'What does ORM stand for?',
        points: 10,
        questionType: 'MultipleChoice',
        choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping',
        correct: 4,
        isTrue: null
    }),

    createStudent({
        _id: 1,
        username: 'alice',
        password: 'alice',
        firstName: 'Alice',
        lastName: 'Wonderland',
        graduateYear: 2020,
        scholarship: 15000
    }),
    createStudent({
        _id: 2,
        username: 'bob',
        password: 'bob',
        firstName: 'Bob',
        lastName: 'Hope',
        graduateYear: 2021,
        scholarship: 12000
    }),

    //Alice
    answeredQuestion(
        1,
        3,
        {
            _id: 7,
            trueFalseAnswer: true,
            multipleChoiceAnswer: null
        }),
    answeredQuestion(
        1,
        4,
        {
            _id: 8,
            trueFalseAnswer: false,
            multipleChoiceAnswer: null
        }),
    answeredQuestion(
        1,
        5,
        {
            _id: 9,
            trueFalseAnswer: null,
            multipleChoiceAnswer: 1
        }),
    answeredQuestion(
        1,
        6,
        {
            _id: 10,
            trueFalseAnswer: null,
            multipleChoiceAnswer: 2
        }),
    //Bob
    answeredQuestion(
        2,
        3,
        {
            _id: 11,
            trueFalseAnswer: false,
            multipleChoiceAnswer: null
        }),
    answeredQuestion(
        2,
        4,
        {
            _id: 12,
            trueFalseAnswer: true,
            multipleChoiceAnswer: null
        }),
    answeredQuestion(
        2,
        5,
        {
            _id: 13,
            trueFalseAnswer: null,
            multipleChoiceAnswer: 3
        }),
    answeredQuestion(
        2,
        6,
        {
            _id: 14,
            trueFalseAnswer: null,
            multipleChoiceAnswer: 4
        })
    ])
};
module.exports = {truncateDatabase, populateDatabase, createStudent, deleteStudent,createQuestion, deleteQuestion, answeredQuestion, deleteAnswer,findAllStudents, findStudentById, findAllQuestions, findQuestionById,findAllAnswers, findAnswerById, findAnswersByStudent, findAnswersByQuestion};