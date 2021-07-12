const express = require('express'); // Include ExpressJS
const app = express(); //Create an ExpressJS app
const bodyParser = require('body-parser'); // middleware

app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    console.log('In the middleware!');
    res.send('<form action="/result" method="post">Name:<input type="text" name="name" >Age:<input type="number" name="age" ><input type="submit" value="Submit Query"></form>');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name}, you are ${age} years old`);
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})