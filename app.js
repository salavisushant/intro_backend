const express = require('express');

const user = require('./user.json');

const app = express();  

app.get('/users', (req, res) => {
    return res.send(user)
})

app.get('/', (req, res) => {
    return res.send("Welcome To Homepage")
})


app.listen(2000, function () {
    console.log("listening on port 2000");
});

