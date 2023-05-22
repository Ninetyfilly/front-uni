import React from 'react';
import './titulos.css'
import { Link} from 'react-router-dom';


function Titulos() {

  return (
    <div className="titulos">
    <h1>Menú</h1>
    <nav>
      <ul>
        <li>
          <Link to="/titulos/formulario">Formulario</Link>
        </li>
        <li>
            <Link to="/menu">Menú</Link>
            </li>
      </ul>
    </nav>
  </div>
  );
}

export default Titulos;
