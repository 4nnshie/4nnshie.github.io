const express = require('express'); // Include ExpressJS
const cookieParser = require('cookie-parser');
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware
const path = require('path');
const MyCookie = require("./MyCookie");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
//app.set('css', path.join(__dirname, "css"));
app.set('views', path.join(__dirname, "view"));

let cookies="";
//app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
//    res.locals.list = cookieList;
    res.cookie("first", 1, 60000 * 3);
    cookies=JSON.stringify(req.cookies);
    console.log(req.cookies);
    res.render("index", {
        cookieList: {cookies},
    });
});

app.post('/addCookie', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    if (req.body.key) {
        res.cookie(key, value, {maxAge: 60000 * 3});
    }
    res.redirect(302,'/');
});


app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})

