import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import style from '../Styles/Footer.module.css'

const Footer = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };


  return (
    <footer className={`${style.footer} ${state.theme === "light" ? style.light : style.dark}`}>
      <p>Powered by</p>
      <img 
      src="./images/DH.png" 
      className={style.img}
      alt='DH-logo' 
      />
    </footer>
  )
}

export default Footer
