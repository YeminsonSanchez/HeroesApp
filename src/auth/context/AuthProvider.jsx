import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export const AuthProvider = ({ children }) => {
  const inicialState = {
    logged: false,
  };

  const [authstate, dispach] = useReducer(authReducer, inicialState);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
