const express = require("express")
const controller = require("../controllers/FormularioController")
var api = express.Router()

api.post("/tarea", controller.RegistrarTarea)
api.get("/listarTarea", controller.ListarTarea)

module.exports = api;