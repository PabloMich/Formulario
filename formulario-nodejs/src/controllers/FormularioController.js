const Todolist = require('../models/FormularioModel')

function RegistrarTarea(req, res) {
    var datos = req.body;
    var modeloEntidades = new Todolist();
    if (datos.nombre, datos.texto, datos.direccion, datos.genero, datos.telefono, datos.fechaNacimiento, datos.carrera, datos.generoPoesia) {
        modeloEntidades.nombre = datos.nombre;
        modeloEntidades.texto = datos.texto;
        modeloEntidades.direccion = datos.direccion;
        modeloEntidades.genero = datos.genero;
        modeloEntidades.telefono = datos.telefono;
        modeloEntidades.fechaNacimiento = datos.fechaNacimiento;
        modeloEntidades.carrera = datos.carrera;
        modeloEntidades.generoPoesia = datos.generoPoesia;
        Todolist.find({
            nombre: datos.nombre,
            texto: datos.texto,
            direccion: datos.direccion,
            genero: datos.genero,
            telefono: datos.telefono,
            fechaNacimiento: datos.fechaNacimiento,
            carrera: datos.carrera,
            generoPoesia: datos.generoPoesia,
        }, (error, tareaEncontrada) => {
            if (tareaEncontrada.length == 0) {
                modeloEntidades.save((error, tareaAgregada) => {
                    if (error)
                        return res.status(500).send({ Error: "Error en la petición" });
                    if (!tareaAgregada)
                        return res.status(404).send({ Error: "No se pudo agregar la tarea" });
                    return res.status(200).send({ Tarea_nueva: tareaAgregada });
                });
            } else {
                return res.status(500).send({ Error: "Esta tarea ya existe" });
            }
        })
    } else {
        return res.status(500).send({ Error: "Debes llenar los campos solicitados" });
    }
}

function ListarTarea(req, res) {
    Todolist.find((error, listadoEntidades) => {
        if (error) return res.status(500).send({ Error: "Error en la petición" });
        return res.status(200).send({ Entidades_registradas: listadoEntidades });
    });
}

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

module.exports = {
    RegistrarTarea,
    ListarTarea,
    calcularEdad
}