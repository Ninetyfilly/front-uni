import React from 'react';
import './tramites.css'
import { Link} from 'react-router-dom';


function Tramites() {

  return (
    <div className="tramites">
        <h1>Menú</h1>
        <nav>
        <ul>
            <li>
            <Link to="/tramites/formulario">formulario</Link>
            </li>
            <li>
            <Link to="/menu">Menú</Link>
            </li>
        </ul>
        </nav>
    </div>
  );
}

export default Tramites;
