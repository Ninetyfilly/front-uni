import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit (event) {
    event.preventDefault();
    const data = {
      email: username,
      password
    }
    try {
      const response = await axios.post(`http://localhost:8000/login`,{
        body: data
      })
      console.log('response', response.data.data[0])

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
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
