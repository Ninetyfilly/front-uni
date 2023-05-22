import Login from './views/login/login'
import Menu from './views/menu/menu'
import Estadisticas from './views/estadisticas/estadisticas'
import Titulos from './views/titulos/titulos'
import Tramites from './views/tramites/tramites'
import FormularioT from './views/tramites/formulario'
import TablaT from './views/tramites/tabla'
import FormularioTitu from './views/titulos/formulario'
import TablaTitu from './views/titulos/tabla'





import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/menu/estadisticas",
      element: <Estadisticas />,
    },
    {
      path: "/menu/titulos",
      element: <Titulos />,
    },
    {
      path: "/menu/tramites",
      element: <Tramites />,
    },
    {
      path: "/tramites/formulario",
      element: <FormularioT />,
    },
    {
      path: "/tramites/formulario/tablas",
      element: <TablaT />,
    },
    {
      path: "/titulos/formulario",
      element: <FormularioTitu />,
    },
    {
      path: "/titulos/formulario/tablas",
      element: <TablaTitu />,
    },
    
  ]);

  return (
    <div>
      {/* <Login/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
