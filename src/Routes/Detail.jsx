import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";
import style from '../Styles/Detail.module.css';

const Detail = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };


  const { id } = useParams();

  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`


  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDentist(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={`${style.deatilContainer} ${state.theme === "light" ? style.light : style.dark}`}>
      <h1 className={style.title}>Dentist Details </h1>
      {dentist ?
        (<div className={style.info}>
          <h3>{dentist.name}</h3>
          <p>Email: {dentist.email}</p>
          
          <p>Phone: {dentist.phone}</p>
          <p>WebSite: {dentist.website}</p>
        </div>)
        :
        (<p>No dentist found</p>)
      }
    </section>
  )
}

export default Detail