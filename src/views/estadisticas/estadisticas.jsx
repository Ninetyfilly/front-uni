import React from 'react';
import './estadisticas.css'
import { Link} from 'react-router-dom';


function Estadisticas() {

  return (
    <div className="estadisticas">
    <h1>Menú</h1>
    <nav>
      <ul>
        <li>
          <Link to="/menu/estadisticas">Estadísticas</Link>
        </li>
        <li>
            <Link to="/menu">Menú</Link>
            </li>
      </ul>
    </nav>
  </div>
  );
}

export default Estadisticas;
