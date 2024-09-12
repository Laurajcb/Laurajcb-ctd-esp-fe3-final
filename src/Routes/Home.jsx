import React, { useEffect, useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Card from '../Components/Card'
import style from '../Styles/Home.module.css'


const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  useEffect(() => {
    const dentistFetch = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const dentistList = await response.json()
        dispatch({ type: 'FETCH_SUCCESS', payload: dentistList })

      } catch (error) {
        console.error("error fetching dentistList: ", error)
      }
    }
    dentistFetch()
  }, [])

  const { dentistList } = state

  return (
    <main className={`${style.homeContainer} ${state.theme === "light" ? style.light : style.dark}`} >
      <div className={style.homeDiv}>
        <h1 className={style.homeTitle}>Dentists available for you</h1>
      <div className={style.homeCardGrid}>
        {dentistList.map(dentist => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
      </div>
    </main>
  )
}

export default Home