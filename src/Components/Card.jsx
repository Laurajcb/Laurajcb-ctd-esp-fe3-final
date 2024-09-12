import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";
import style from '../Styles/Card.module.css';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };


  const addFav = () => {
    const currentFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = currentFavs.some((dentist) => dentist.id === id);

    if (isFav) return;

    const dentist = { name, username, id };
    localStorage.setItem('favorites', JSON.stringify([...currentFavs, dentist]));
    dispatch({ type: 'ADD_FAV', payload: dentist });
  };

  return (
    <div className={`${style.cardContainer} ${state.theme === "light" ? style.light : style.dark}`}>
      <section key={id}>
        <Link to={`/dentist/${id}`}>
          <img src={"/images/doctor.jpg"} width="120" alt="Doctor" />
          <div className={style.cardTxt}>
            <p>{name}</p>
            <p>{username}</p>
          </div>
        </Link>
      </section>
      <button
        onClick={addFav}
        className={style.favButton}
      >
        ⭐️
      </button>
    </div>
  );
}

export default Card;
