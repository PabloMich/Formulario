import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListaTarea from './Formulario/ListaTarea'
import AgregarAlumno from './Formulario/AgregarAlumno'
import Genero from './Formulario/ReporteGenero';
import Edad from './Formulario/ReporteEdad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AgregarAlumno />} exact></Route>
        <Route path='/reporteCarrera' element={<ListaTarea />} exact></Route>
        <Route path='/reporteGenero' element={<Genero />} exact></Route>
        <Route path='/reporteEdad' element={<Edad />} exact></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
