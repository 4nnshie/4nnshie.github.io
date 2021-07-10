const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name || !age) {
        name = "person";
        age = "0";
    }
    res.send(`Welcome ${name}, you are ${age} years old`);
});
app.listen(3000);
