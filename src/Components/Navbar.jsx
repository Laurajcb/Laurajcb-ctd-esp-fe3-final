import React, { useContext } from 'react';
import { ContextGlobal } from "../Components/utils/global.context"
import { Link } from 'react-router-dom';
import Home from '../Routes/Home'
import Contact from '../Routes/Contact';
import Favs from '../Routes/Favs';

import style from '../Styles/Navbar.module.css'

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return (
    <nav className={`${style.navbarContainer} ${state.theme === "light" ? style.light : style.dark}`}>
      <Link to="/" className={style.link}>Home</Link>
      <Link to="/contact" className={style.link}>Contact</Link>
      <Link to="/favs" className={style.link}>Favs</Link>


      <button
      className={style.themeBtn}
        onClick={toggleTheme}
      >
        ☀️🌚
      </button>
    </nav>
  )
}

export default Navbar