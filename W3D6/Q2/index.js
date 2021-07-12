const express = require('express'); // Include ExpressJS
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.set('view engine', 'ejs');
//app.set('css', path.join(__dirname, "css"));
app.set('views', path.join(__dirname, "view"));

const date = new Date();
const hour = date.getHours();
let accss = "";
if (hour >= 6 && hour <= 18) {
    accss = "day.css";
} else {
    accss = "night.css";
}

app.get('/', (req, res) => {

    res.render("index", {
        actcss: accss,
    });
});

app.post('/operate', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.render("answer", {
        actcss: accss,
        nameInput: name,
        ageInput: age,

    });
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

