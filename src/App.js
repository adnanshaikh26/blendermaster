import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import Home from "./components/pages/Home";
import Ourdrinks from "./components/pages/Ourdrinks";
import Vibe from "./components/pages/Vibe";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/UI/Hero";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourdrinks" element={<Ourdrinks />} />
        <Route path="/vibe" element={<Vibe />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
