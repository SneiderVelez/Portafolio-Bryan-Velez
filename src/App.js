import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Api from "./pages/api/Api";
function App() {
  return (
    <BrowserRouter>
      <div className="main-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="proyectos" element={<Projects />} />
          <Route path="API" element={<Api />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
