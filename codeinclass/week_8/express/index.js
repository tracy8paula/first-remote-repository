const express = require('express');
const app = express();
const port = 3000;
// get function helps in creating endpoints like greetings down below
app.get('/', (req, res) => {
    res.send('Hello, TRACY!');
});

// list of friends to get back friends
let friends = [
    {"ID": 1, "Name":"Esther"},
    {"ID": 2, "Name": "Mercy"},
    {"ID": 3, "Name":"Daniel"}
];
app.get('/greeting-friends', (request,response) => {
    return response.send(friends); //send doesn't allow concatenating
});

let classlist = [
    {"ID": 1, "AccessNo": "B27291", "StudentName": "Adongo Tracy Paula"},
    {"ID": 2, "AccessNo": "B27015", "StudentName": "Ndagire Catherine"},
    {"ID": 3, "AccessNo": "B27086", "StudentName": "Kembabazi Anitah"},
    {"ID": 4, "AccessNo": "B28407", "StudentName": "Magero Daniel Mugulo"},
    {"ID": 5, "AccessNo": "B27293", "StudentName": "Kica Esther"},
    {"ID": 6, "AccessNo": "B27013", "StudentName": "Nasikye Cynthia"},
    {"ID": 7, "AccessNo": "B27014", "StudentName": "Ssemambo Humble Joshua"},
    {"ID": 8, "AccessNo": "B29158", "StudentName": "Kawooma Elijah Kayizzi"},
    {"ID": 9, "AccessNo": "B27537", "StudentName": "Edekei Justin"},
    {"ID": 10, "AccessNo": "B28490", "StudentName": "Babirye Joy Lenah"},
];

app.get('/class-list', (request,response) => {
    return response.send(classlist); //send doesn't allow concatenating
});

app.get('/class-list-by-id/:ID', (request,response) => { // id here is simply a placeholder without the end goal of searching into our list yet
    console.log("Logging request params", request.params); // this simply takes in our value and attaches the variable name we gave in our code as the place holder
    console.log("Using value from front end", request.params.ID); // this properly enlists the variable

    for(i = 0; i < 9; i++) {
        if(request.params.ID == classlist[i].ID){
            return response.status(200).send(classlist[i]);
        };
        console.log(classlist[i]);

    }
return response.status(400).send('Found nothing!'); //send doesn't allow concatenating
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());