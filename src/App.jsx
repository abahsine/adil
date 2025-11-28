

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import useOnScreen from "./components/utils/useScreen";
import Scroller from "./pages/BoucleInfinis";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Header />
        
 
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
