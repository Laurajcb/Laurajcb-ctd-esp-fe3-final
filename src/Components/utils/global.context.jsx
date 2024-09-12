import { createContext, useReducer, useMemo } from "react";


export const initialState = {
  theme: "light",
  dentistList: [],
  favorites: [],
  loading: true,
  error: null,
}

export const ContextGlobal = createContext(undefined);

export const contextReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        dentistList: action.payload
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
      case 'ADD_FAV':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(contextReducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
