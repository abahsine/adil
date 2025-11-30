
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
const Header  =  lazy(()=>  import("./components/Header"));
const Footer  =  lazy(()=>  import("./components/Footer"));
const About   =  lazy(()=> import("./pages/About"));
const Services  =  lazy(()=>  import("./pages/Services"));
const Accueil  =  lazy(()=>  import("./pages/Accueil"));
const Devis  =  lazy(()=>  import("./pages/Devis"));
const TermsPage  =  lazy(()=>  import("./pages/cgu_cgv"));



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
          <Suspense fallback ={<div>Chargement ...</div>} ></Suspense>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/terms" element={<TermsPage/>} />
          <Route path="/galerie" element={<Galerie/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Devis" element={<Devis/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
