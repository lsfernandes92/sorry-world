import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageTemplate from "components/PageTemplate";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
