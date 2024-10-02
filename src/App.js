import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const page = window.location.pathname;

  return (
    page === "/about" ? <About /> : <Home />
  )
}

export default App;
