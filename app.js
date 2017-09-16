'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(__dirname+'/Public'));

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//请求index.html
app.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile('index.html', {root: './Public'});
});

app.listen(80, () => {
    console.log('running on port 80...');
});