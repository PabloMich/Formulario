const express = require('express');
const cors = require('cors');
var app = express();

const rutaTodoList = require('./src/routes/Formulario');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/api', rutaTodoList);


module.exports = app;