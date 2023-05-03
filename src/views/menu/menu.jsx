import React from 'react';
import './menu.css'
import { Link,Outlet } from 'react-router-dom';


function Menu() {

  return (
    <div className="menu">
       <Link to="/menu/estadisticas">
        <button>estadisticas</button>
      </Link>
      <Link to="/menu/titulos">
        <button>Titulos</button>
      </Link>
      <Link to="/menu/tramites">
        <button>Tramites</button>
      </Link>
      <Link to="/">
        <button>log-out</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default Menu;
