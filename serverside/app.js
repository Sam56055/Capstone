const express = require('express');
const mongoose = require('mongoose');
const Student = require('./student');

const bodyParser  = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/IT6203', {useNewURLParser: true, useUnifiedTopology: true})
    .then(()=> { console.log('connected')})
    .catch(()=> {{ console.log('error connecting to MongoDB')}})


app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//in the app.get() method below we add a path for the students API 
//by adding /students, we tell the server that this method will be called every time http://localhost:8000/students is requested. 
app.get('/students', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
    // const students = [ 
    // { "id" : "1", "firstName" : "John" , "lastName" : "Dow", "address" : "123 Lake Dr" , "zip" : "30068", "city" : "Marietta" , "state" : "GA" }, 
    // { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith", "address" : "6000 North Ave" , "zip" : "30144", "city" : "Kennesaw" , "state" : "GA"}, 
    // { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe", "address" : "11E. St Morland Cir" , "zip" : "30188", "city" : "Woodstock" , "state" : "GA"}];
    // //send the array as the response 
    // res.json(students);
    Student.find()
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })

});

app.delete("students/:id", (req, res, next) => {
    Student.deleteOne({_id: req.params.id}).then( response => {
        console.log(response);
        res.status(200).json("Student deleted successfully")
    })
})


app.post('/students', (req, res, next) => {
    const student = new Student({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        street: req.body.street,
        zip: req.body.zip,
        city: req.body.city,
        state: req.body.state
    })

    student.save()
    .then(()=> { console.log("success") })
    .catch(err => {console.log(err)})
    // console.log(student.firstName + " " + student.lastName + student.address + " " + student.zip + " " + student.city + " " + student.state);
    //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
});




app.listen(8000)
//to use this middleware in other parts of the application
module.exports=app;