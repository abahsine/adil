
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,lazy, useEffect } from "react";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Accueil from "./pages/Accueil";
import Devis from "./pages/Devis";
import TermsPage from "./pages/cgu_cgv";




function App() {
 
  return (
    <>
      
        <Header />
        
          <Suspense fallback ={<div>Chargement ...</div>} ></Suspense>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/terms" element={<TermsPage/>} />
          <Route path="/galerie" element={<Galerie/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Devis" element={<Devis/>} />
        </Routes>

        <Footer />
   
    </>
  );
}

export default App;
