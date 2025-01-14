const express = require('express');
const my_service = require('./service/my_service');
//const myDb = require('../models/my_db');
const app = express();
const port = 3000;

app.use(express.json()); // added to let the back end be familiar with the post work so as to know what to expect
// get function helps in creating endpoints like greetings down below
app.get('/', (req, res) => {
    res.send('Hello, TRACY!');
});

// list of friends to get back friends
let friends = [ // data goes to models
    {"ID": 1, "Name":"Esther"},
    {"ID": 2, "Name": "Mercy"},
    {"ID": 3, "Name":"Daniel"}
];

let friends_two = [
    {"ID": 1, "Name":"Esther"},
    {"ID": 2, "Name": "Mercy"},
    {"ID": 3, "Name":"Daniel"}
];
app.get('/greeting-friends', (request,response) => {
    return response.send(friends); //send doesn't allow concatenating
});



app.get('/class-list', (request,response) => {
    return response.send(my_service.getStudents()); //send doesn't allow concatenating
});

app.get('/class-list-by-id/:ID', (request,response) => { // id here is simply a placeholder without the end goal of searching into our list yet
    //console.log("Logging request params", request.params); // this simply takes in our value and attaches the variable name we gave in our code as the place holder
    //console.log("Using value from front end", request.params.ID); // this properly enlists the variable
    return response.status(200).send(my_service.getStudentById(request)); //send doesn't allow concatenating
});

// POST offers security and changes how this data is viewed
app.post('/sign-up', (request, response) => {
    console.log("Logging request body", request.body);
    return response.status(200).send("Here, we using POOOOSTTT!");
});

// DELETE

// PUT

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());