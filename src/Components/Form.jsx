import React, { useState } from "react";
import style from '../Styles/Contact.module.css'

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setErrorMessage('El nombre debe tener más de 5 caracteres');
      setSuccessMessage('');

    } else if (!emailRegex.test(email)) {
      setErrorMessage('Por favor ingrese un email válido');
      setSuccessMessage('');

    } else {
      setErrorMessage('');
      setSuccessMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      console.log(`Nombre: ${name}, Email: ${email}`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre completo"
          />
        </div>
        <div className={style.form}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escribe tu email"
          />
        </div>
        <button
          type="submit"
          className={style.btn}
          >
          Enviar
        </button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
