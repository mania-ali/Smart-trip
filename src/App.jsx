import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/common/Layout";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;