import React, { createContext, useContext, useState } from "react";
import { Loginn, signUp } from "../firebase/firebase";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await Loginn(email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await signUp(name, email, password);
     
      const [firstName, lastName] = name.split(' ');
      setUser({ firstName, lastName, email });
      return response;
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    }
  };

  return (
    <authContext.Provider value={{ user, login, signup }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
