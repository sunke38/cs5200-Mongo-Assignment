module.exports = function () {
const mongoose = require('mongoose');
const databaseName = 'whiteboard';
//local
//var connectionString = 'mongodb://localhost:27017/';
//remote user sunke38 password 123456
var connectionString ='mongodb://sunke38:123456@ec2-18-217-179-219.us-east-2.compute.amazonaws.com:27017/';
connectionString += databaseName;
mongoose.connect(connectionString,{authSource: 'admin'});

};