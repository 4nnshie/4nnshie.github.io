const express = require('express'); // Include ExpressJS
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // route to page with form

});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name}, you are ${age} years old`);
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})