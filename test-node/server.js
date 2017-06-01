#!/bin/env node
 
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dotenv = require('dotenv').config;

var db = 'mongodb://database/admin';
mongoose.connect(db); 

var model = mongoose.model('Test', new mongoose.Schema({ name: String }));
console.log(model.db.host); // localhost
console.log(model.db.port); // 27017
console.log(model.db.name); // myDatabase

const PORT = process.env.APP_PORT; //3000;
app.get('/', function (req, res) {
  console.info(req.header("user-agent"));
  res.send('Hello World!');
})

app.listen(PORT, function () {
  console.log('Example app listening on port %s!', PORT);
})
