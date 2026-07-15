import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import useAuth from "./hooks/useAuth";

import Layout from "./components/common/Layout";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRoutes() {
  const { token } = useAuth();

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </>
      ) : (
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;