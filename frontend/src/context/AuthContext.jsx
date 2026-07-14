import { useState } from "react";
import AuthContext from "./AuthContextObject";
import { loginUser, registerUser } from "../services/authApi";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  async function login(emailInput, password) {
    const data = await loginUser(emailInput, password);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
    setToken(data.token);
    setEmail(data.email);
  }

  async function register(emailInput, password) {
    const data = await registerUser(emailInput, password);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
    setToken(data.token);
    setEmail(data.email);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail(null);
  }

  return (
    <AuthContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}