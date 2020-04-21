require("./data/db.js")();
const universityDao = require('./data/dao/university.dao.server');
const truncateDatabase = () => universityDao.truncateDatabase();
const populateDatabase = () => universityDao.populateDatabase();
const testStudentsInitialCount = () => universityDao.findAllStudents() .then(ret => console.log("Initial #students = " + ret.length));
const testQuestionsInitialCount = () => universityDao.findAllQuestions() .then(ret => console.log("Initial #questions = " + ret.length));
const testAnswersInitialCount = () => universityDao.findAllAnswers().then(ret => console.log("Initial #Answers = " + ret.length));
const testDeleteAnswer = () => universityDao.deleteAnswer(14).then(result => {return universityDao.findAnswersByStudent(2)})
const testDeleteQuestion = () => universityDao.deleteQuestion(3).then(result=>{return universityDao.findAllQuestions()})
const testDeleteStudent = () => universityDao.deleteStudent(2).then(result => {return universityDao.findAllStudents()})

truncateDatabase()
    .then(()=> console.log("truncateDatabase"))
    .then(() => populateDatabase())
    .then(()=>console.log("populateDatabase"))
    .then(()=>testStudentsInitialCount())
    .then(()=>testQuestionsInitialCount())
    .then(()=>testAnswersInitialCount())
    .then(()=>testDeleteAnswer())
    .then(result=>console.log("bob left "+result.length+" answer"))
    .then(()=>testDeleteQuestion())
    .then(result=>console.log("remove:Is the following schema valid? "+result.length+" question left"))
    .then(()=>testDeleteStudent()).then(result=>console.log("remove bob "+result.length+" question left"));
