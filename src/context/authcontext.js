import React, { createContext, useContext, useState, useEffect } from "react";

// Backend API base URL
const API_BASE_URL = `${process.env.REACT_APP_API_URL}/users`;

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login using backend API
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Login failed");
      }
      const data = await response.json();
      // Store token for future requests
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.client));
      setUser(data.client);
      return data;
    } catch (error) {
      console.error("Login Error:", error.message);
      throw error;
    }
  };

  // Signup using backend API
  const signup = async (name, email, phonenumber, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Include phonenumber in the body
        body: JSON.stringify({ name, email, phonenumber, password }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Signup failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.client));
      setUser(data.client);
      return data;
    } catch (error) {
      console.error("Signup Error:", error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
