import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";

function AppRoutes() {
  const page = window.location.pathname;

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Page not found :(</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
