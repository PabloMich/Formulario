const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodolistSchema = Schema({
    nombre: { type: String, required: true },
    texto: { type: String, required: true },
    direccion: { type: String, required: true },
    genero: { type: String, required: true },
    telefono: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    carrera: { type: String, required: true },
    generoPoesia: { type: String, required: true },
    fechaInscripcion: { type: String },
    fechaDeclamar: { type: String },
    edad: { type: String }
});

module.exports = mongoose.model("Todolist", TodolistSchema);