import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { TextareaAutosize } from '@mui/base';

const Formulario = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario
    const data = {
        ...form,
        // fechaAper: new Date(form.fechaAper),
        // fechaCierre:new Date(form.fechaCierre)
      }
      console.log(data);
    
      try {
        const response = await axios.post(`http://127.0.0.1:8000/tramites`,{
          ...data
        })
        if(response.data.status == 'ok'){
          toast("Datos cargados correctamente.", {
            autoClose: 2000,
            position:"top-center",
            theme: "dark"
          });
          setForm({
            fojasTotales: '',
            folioInit: '',
            folioFin: '',
            asunto: '',
          })
        }
        else {
          console.log('response.data.status',response.data.status)
          toast("Error, vuelva a intentarlo.", {
            autoClose: 2000,
            position:"top-center",
            theme: "dark"
          });
        }
      } catch (error) {
        console.log('Error: ',error)
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='formTramites'>
        <TextField 
          type="number"
          id="fojasTotales"
          label="Fojas Totales:"
          required
          min={0}
          max={99}
          value={form.fojasTotales}
          onChange={(e) => setForm({...form, fojasTotales: e.target.value})}
        />
      </div>
      <div className='formTramites'>
        <TextField 
          type="number"
          id="folioInit"
          label="Folio Inicial:"
          required
          min={0}
          max={99}
          value={form.folioInit}
          onChange={(e) => setForm({...form, folioInit: e.target.value})}
        />
      </div>
      <div className='formTramites'>
        <TextField 
          type="number"
          id="folioFin"
          label="Folio Final:"
          required
          min={0}
          max={99}
          value={form.folioFin}
          onChange={(e) => setForm({...form, folioFin: e.target.value})}
        />
      </div>
      <div className="asunto">
        <TextareaAutosize placeholder='asunto' value={form.asunto}
        onChange={(e) => setForm({...form, asunto: e.target.value})}
        id="asunto"
        required
      />
        <p className="asuntoText">{form?.asunto?.length}/500</p>
      </div>
      <ToastContainer/>
      <button type="submit">Enviar</button>
      <div className="menuForm">
        <h1>Opciones</h1>
        <nav>
        <ul>
            <li>
            <Link to="/menu/tramites">Menu de Tramites</Link>
            </li>
            <li>
            <Link to="/menu">Menú</Link>
            </li>
            <li>
            <Link to="/tramites/formulario/tablas">Ver tablas</Link>
            </li>
        </ul>
        </nav>
    </div>
    </form>
  );
}

export default Formulario;
