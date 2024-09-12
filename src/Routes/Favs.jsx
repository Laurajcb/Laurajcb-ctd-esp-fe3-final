import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import style from '../Styles/Favs.module.css'


const Favs = () => {
  const favLits = JSON.parse(localStorage.getItem('favorites')) || []
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return (
    <section className={`${style.favsContainer} ${state.theme === "light" ? style.light : style.dark}`}>
      <h1>Dentists Favs</h1>
      <div className={style.grid}>
        {
          favLits.length > 0 ?
            (favLits.map((dentist) => (
              <Card
                key={dentist.id}
                id={dentist.id}
                name={dentist.name}
                username={dentist.username}
              />
            )))
            :
            (<h3>There are no favorites yet</h3>)
        }
      </div>
    </section>
  );
};

export default Favs;