const express = require('express'); // Include ExpressJS npm init
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware ---- npm install express body-parser
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const date = new Date();
const hour = date.getHours();
let actcss = "";

app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {

    if (hour >= 6 && hour <= 18) {
        actcss = "night.css";
    } else {
        actcss = "day.css";
    }
    console.log(hour);
    console.log('In the middleware!');
    res.send('<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Form Q3</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '<form action="/result" method="get">\n' +
        '    Name:\n' +
        '    <input type="text" name="name" >\n' +
        '    Age:\n' +
        '    <input type="number" name="age" >\n' +
        '\n' +
        '    <input type="submit" value="Submit Query">\n' +
        '</form>\n' +
        '</body>\n' +
        '</html>');
});

app.get('/result', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name}, you are ${age} years old`);
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})