import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Nabvar/Navbar'
import axios from 'axios';
import Swal from "sweetalert2";

function AgregarTarea() {
    //Hooks
    const [nombre, setNombre] = useState('')
    const [texto, setTexto] = useState('')
    const [direccion, setDireccion] = useState('')
    const [genero, setGenero] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [carrera, setCarrera] = useState('')
    const [generoPoesia, setGeneroPoesia] = useState('')

    const navigate = useNavigate()

    function agregarTarea(e) {
        var tarea = {
            nombre: nombre,
            texto: texto,
            direccion: direccion,
            genero: genero,
            telefono: telefono,
            fechaNacimiento: fechaNacimiento,
            carrera: carrera,
            generoPoesia: generoPoesia,
        }

        axios.post('/api/tarea/', tarea)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Tarea agregada correctamente",
                    timer: 2000
                });
                navigate("/")
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: err.response.data.Error,
                    timer: 2000
                });
            })
        e.preventDefault();
    }

    return (
        <>
            <Navbar />

            <div class="container">
                <main>
                    <div class="py-5 text-center">
                        <img class="d-block mx-auto mb-4" src="https://cdn-icons-png.flaticon.com/512/295/295429.png" alt="" width="72" height="65" />
                        <h2>Concurso de Poesía</h2>
                    </div>

                    <div class="row g-6">

                        <div class="col-md-7 col-lg-12">
                            <h4 class="mb-3">Regístrate aquí!</h4>
                            <form class="needs-validation" novalidate>
                                <div class="row g-3">
                                    <div class="col-sm-6">

                                        <label for="username" class="form-label">Carnet <span class="text-muted">(6 dígitos)</span></label>
                                        <div class="input-group has-validation">
                                            <input value={nombre}
                                                onChange={(e) => { setNombre(e.target.value); }} type="text" class="form-control" id="username" placeholder="A-5--(1,3 o 9)" required minlength="6" maxlength="6" />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-sm-6">
                                        <label for="username" class="form-label">Nombre Completo</label>
                                        <div class="input-group has-validation">
                                            <input value={texto}
                                                onChange={(e) => { setTexto(e.target.value); }} type="text" class="form-control" id="username" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12">
                                        <label for="username" class="form-label">Dirección</label>
                                        <div class="input-group has-validation">
                                            <input value={direccion}
                                                onChange={(e) => { setDireccion(e.target.value); }} type="text" class="form-control" id="username" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">Teléfono</label>
                                        <input value={telefono}
                                            onChange={(e) => { setTelefono(e.target.value); }} type="number" class="form-control" id="email" placeholder="" />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Género</label>
                                        <select value={genero}
                                            onChange={(e) => { setGenero(e.target.value); }} class="form-select" id="country" required>
                                            <option value="" disabled selected>Elija una opción</option>
                                            <option>Masculino</option>
                                            <option>Femenino</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">Fecha de Nacimiento </label>
                                        <input value={fechaNacimiento}
                                            onChange={(e) => { setFechaNacimiento(e.target.value); }} max="2005-08-23" type="date" class="form-control" id="address2" placeholder="Apartment or suite" />
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="country" class="form-label">Carrera</label>
                                        <select value={carrera}
                                            onChange={(e) => { setCarrera(e.target.value); }} class="form-select" id="country" required>
                                            <option value="" disabled selected>Elija una opción</option>
                                            <option value="Informática">Informática</option>
                                            <option value="Mecánica Automotriz">Mecánica Automotriz</option>
                                            <option value="Electricidad Industrial">Electricidad Industrial</option>
                                            <option value="Electrónica">Electrónica</option>
                                            <option value="Dibujo Técnico">Dibujo Técnico</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="state" class="form-label">Género de Poesía</label>
                                        <select value={generoPoesia}
                                            onChange={(e) => { setGeneroPoesia(e.target.value); }} class="form-select" id="state" required>
                                            <option value="" disabled selected>Elija una opción</option>
                                            <option value="Lírica">Lírica</option>
                                            <option value="Épica">Épica</option>
                                            <option value="Dramática">Dramática</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                </div>

                                <hr class="my-4" />

                                <button onClick={agregarTarea} class="w-100 btn btn-primary btn-lg" type="submit">Registrar</button>
                            </form>
                        </div>
                    </div>
                </main>

                <footer class="my-5 pt-5 text-muted text-center text-small">
                    <p class="mb-1">&copy; 2022 Universidad de Guatemala</p>

                </footer>
            </div>
        </>
    )
}

export default AgregarTarea