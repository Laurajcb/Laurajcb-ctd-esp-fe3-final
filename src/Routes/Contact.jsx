import React, {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from "../Components/utils/global.context";
import style from '../Styles/Contact.module.css'


const Contact = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return (
    <div className={`${style.contactContainer} ${state.theme === "light" ? style.light : style.dark}`}>
      <h2 >Want to know more?</h2>
      <p className={style.p}>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact