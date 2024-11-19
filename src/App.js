import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import RickAndMorty from "./pages/api/RickAndMorty";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="rick-y-morty" element={<RickAndMorty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
