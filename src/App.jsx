import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./context/context"
import ThemeToggle from "./components/ThemeToggle";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {

const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/:id" element={<ServiceDetail/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </ThemeContext.Provider>
    </>
  );
}
export default App;
