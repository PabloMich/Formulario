import '../App.css';
import React from "react";

function Navbar() {

    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    Universidad De Guatemala
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/reporteCarrera">Reporte</a>
                        </li>

                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reporte por Carrera
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="/reporteCarrera">Informática</a></li>
                                <li><a class="dropdown-item" href="/">Mecánica Automotriz</a></li>
                                <li><a class="dropdown-item" href="/">Electricidad Industrial</a></li>
                                <li><a class="dropdown-item" href="/">Electrónica</a></li>
                                <li><a class="dropdown-item" href="/">Dibujo Técnico</a></li>
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/reporteEdad">Reporte por Edad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/reporteGenero">Reporte por Género de Poesía</a>
                        </li> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Reporte por Género de Poesía
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="/reporteCarrera">Lírica</a></li>
                                <li><a class="dropdown-item" href="/">Épica</a></li>
                                <li><a class="dropdown-item" href="/">Dramática</a></li>
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Reporte por Fecha</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;