import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Nabvar/Navbar'

function ListaTarea() {

    const [dataTareas, setDataTareas] = useState([])

    useEffect(() => {
        axios.get('/api/listarTarea/').then((res) => {
            setDataTareas(res.data.Entidades_registradas)
        }).catch((err) => {
            console.error(err)
        })
    })

    return (
        <>
            <Navbar />
            <div class="container">
                <div class="py-5 text-center">
                    <h2>Reporte Por Carrera</h2>
                </div>
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Carnet</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Género de Poesía</th>
                        </tr>
                    </thead>
                    {dataTareas.map((alumnos) => {
                        return (
                            <tbody key={alumnos._id}>
                                <tr>
                                    <th class="table-warning" scope="row">{alumnos.nombre}</th>
                                    <td>{alumnos.texto}</td>
                                    <td>{alumnos.telefono}</td>
                                    <td >{alumnos.carrera}</td>
                                    <td>{alumnos.direccion}</td>
                                    <td>{alumnos.generoPoesia}</td>
                                </tr>
                            </tbody>
                        )

                    })}

                </table>
            </div>




        </>
    )
}

export default ListaTarea