// Accueil.tsx
import { Header } from './Header';

import { Hero } from './Hero';
import { IconsAvantages } from './IconsAvantages';
import { TextImg } from './TextImg';
import Steps from './Steps';
import { Solutions } from './Solutions';
import  Partenaires  from './Partenaires';
import { Footer } from './Footer';

function Accueil() {
  return (
    <>
      <Header />
      <Hero />
      <IconsAvantages />
      <TextImg />
      <Steps />
      <Solutions />
      <Partenaires />
      <Footer />
    </>
  );
}

export default Accueil;
