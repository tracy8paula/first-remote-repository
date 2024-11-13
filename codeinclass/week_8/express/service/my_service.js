 const myDb = require('../models/my_db')
 
 // function to generate a student by their id
 const getStudentById = (request) =>{
    for(i = 0; i < 9; i++) {
        if(request.params.ID == myDb[i].ID){
            return myDb[i];
        };
        console.log(myDb[i]);
    }
    return "Found Nothing!";
 };

 // getting all students
 const getStudents = () => {
    console.log("Getting here too: ",myDb);
    return myDb;
 };

 module.exports = {
    getStudentById,
    getStudents
 };
