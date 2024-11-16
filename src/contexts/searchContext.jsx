/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";
import { initialState } from "../utils/initialState";

export const SearchContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "search/new":
      return {
        ...state,
        ...action.payload,
      };
    case "search/price":
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case "search/operationInc":
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.type]: state.options[action.payload.type] + 1,
        },
      };
    case "search/operationDec":
      if (state.options[action.payload.type] <= 0) return state;
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.type]: state.options[action.payload.type] - 1,
        },
      };
    case "search/reset":
      return initialState;
    default:
      return state;
  }
}

function SearchContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Synchronize state with localStorage on state change
  useEffect(() => {
    localStorage.setItem("destination", state.destination);
    localStorage.setItem("dates", JSON.stringify(state.dates));
    localStorage.setItem("options", JSON.stringify(state.options));
    localStorage.setItem("minPrice", state.minPrice.toString());
    localStorage.setItem("maxPrice", state.maxPrice.toString());
  }, [
    state.destination,
    state.dates,
    state.options,
    state.minPrice,
    state.maxPrice,
  ]);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
