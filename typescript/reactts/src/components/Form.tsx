import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";
import Input from "./Input";

const Form: React.FC = () => {
  const { user, isAuthenticated, logout, loginWithPopup } = useAuth0();
  const [dataForm, setDataForm] = useState({
    fullname: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log('campo',e.target.name, 'valor',e.target.value);
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado')
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="App-header">
        {isAuthenticated && user ? (
          <>
            <h1>Hola {user.name}</h1>
            <div>
              <img src={user.picture} alt={user.name} loading="lazy" />
            </div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <label htmlFor="fullname">Nombre completo</label>
            <Input
              id="fullname"
              type="text"
              name="fullname"
              clickchange={handleChange}
            />
            <label htmlFor="password">Contraseña</label>
            <Input
              id="password"
              type="password"
              name="password"
              clickchange={handleChange}
            />
            <Button
              clicke={handleSubmit}
              type={"submit"}
            >
              Iniciar sesion
            </Button>
            <Button
              clicke={() => loginWithPopup({ connection: "google-oauth2" })}
              type={"submit"}
            >
              Iniciar sesion con Gmail
            </Button>
            <Button
              clicke={() => loginWithPopup({ connection: "facebook" })}
              type={"submit"}
            >
              Iniciar sesion con facebook
            </Button>
            <Button
              clicke={() => loginWithPopup({ connection: "github" })}
              type={"submit"}
            >
              Iniciar sesion con gitHub
            </Button>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
