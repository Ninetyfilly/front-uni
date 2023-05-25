import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import { format } from 'date-fns';
import { Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { TextareaAutosize } from '@mui/base';
import './formulario.css'

const Formulario = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate();
  const PANTEONES = [
    {
      value: 'central',
      label: 'Central',
    },
    {
      value: 'atasta',
      label: 'Atasta',
    },
    {
      value: 'tamulte',
      label: 'Tamulte',
    },
    {
      value: 'sabina',
      label: 'Sabina',
    },
    {
      value: 'arbolito',
      label: 'Arbolito',
    },
  ];

  useEffect(()=>{console.log('form', form)},[form])

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
        const response = await axios.post(`http://127.0.0.1:8000/titulos`,{
          ...data
        })
        if(response.data.status == 'ok')console.log('todo bien')
        else {
          console.log('response.data.status',response.data.status)
          toast("Usuario o contraseña equivocados.", {
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
    <form className='formTitulos' onSubmit={handleSubmit}>
      <div>
        <TextField 
          id="panteon"
          label="panteon"
          variant="outlined"
          select
          required
          min={0}
          max={99}
          defaultValue="centro"
          onChange={(e) => setForm({...form, panteon: e.target.value})}
        >
          {PANTEONES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField 
          type="number"
          id="folio"
          label="folio"
          required
          min={0}
          max={99}
          value={form.folio}
          onChange={(e) => setForm({...form, folio: e.target.value})}
        />
      </div>
      <div>
        <TextField 
          id="nombreTitu"
          label="Nombre del Titular"
          required
          value={form.nombreTitu}
          onChange={(e) => setForm({...form, nombreTitu: e.target.value})}
        />
      </div>
      <div>
        <TextField 
          id="nombreBenefi"
          label="Nombre del beneficiario"
          required
          value={form.nombreBenefi}
          onChange={(e) => setForm({...form, nombreBenefi: e.target.value})}
        />
      </div>
      <div>
        <TextField 
          type="number"
          id="noLote"
          label="Numero de lote"
          required
          min={0}
          max={99}
          value={form.noLote}
          onChange={(e) => setForm({...form, noLote: e.target.value})}
        />
      </div>
      <div>
        <TextareaAutosize placeholder='Ubicación' value={form.ubicacion}
          onChange={(e) => setForm({...form, ubicacion: e.target.value})}
          id="ubicacion"
          required
        />
      </div>
      <div>
        <TextField 
          type="number"
          id="libro"
          label="Libro"
          required
          min={0}
          max={99}
          value={form.libro}
          onChange={(e) => setForm({...form, libro: e.target.value})}
        />
      </div>

      <div>
        <TextField 
          type="number"
          id="Foja"
          label="foja"
          required
          min={0}
          max={99}
          value={form.foja}
          onChange={(e) => setForm({...form, foja: e.target.value})}
        />
      </div>
      <div>
        <TextField 
          type="number"
          id="folioTramite"
          label="Folio del tramite"
          required
          min={0}
          max={100000}
          value={form.folioTramite}
          onChange={(e) => setForm({...form, folioTramite: e.target.value})}
        />
      </div>
      <ToastContainer/>
      <button type="submit">Enviar</button>
      <div className="menuForm">
        <h1>Opciones</h1>
        <nav>
        <ul>
            <li>
            <Link to="/menu/titulos">Menu de titulos</Link>
            </li>
            <li>
            <Link to="/menu">Menú</Link>
            </li>
            <li>
            <Link to="/titulos/formulario/tablas">Ver tablas</Link>
            </li>
        </ul>
        </nav>
    </div>
    </form>
  );
}

export default Formulario;
