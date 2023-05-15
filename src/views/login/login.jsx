import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit (event) {
    event.preventDefault();
    const data = {
      username,
      password
    }
    try {
      const response = await axios.post(`http://localhost:8000/login`,{
        ...data
      })
      if(response.data.status == 'ok')navigate('/menu')
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <ToastContainer/>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
