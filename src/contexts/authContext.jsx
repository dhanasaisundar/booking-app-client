/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "auth/start":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "auth/success":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "auth/failure":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "auth/logout":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "auth/updateField": // New case to update individual user fields
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.payload,
        },
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
