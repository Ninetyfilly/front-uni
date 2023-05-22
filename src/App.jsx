import Login from './views/login/login'
import Menu from './views/menu/menu'
import Estadisticas from './views/estadisticas/estadisticas'
import Titulos from './views/titulos/titulos'
import Tramites from './views/tramites/tramites'
import FormularioT from './views/tramites/formulario'
import TablaF from './views/tramites/tabla'




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
      path: "/formulario/tablas",
      element: <TablaF />,
    },
    
  ]);

  return (
    <>
      {/* <Login/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
