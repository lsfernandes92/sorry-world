import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageTemplate from "components/PageTemplate";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Page not found :(</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
