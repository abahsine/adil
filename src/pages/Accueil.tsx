import '../App.css'
import Solutions from '../components/Solutions';
import Hero from '../components/Hero';
import IconsAvantages from '../components/IconsAvantages';
import TextImg from '../components/TextImg';
import Steps from '../components/Steps';
import Partenaires from '../components/Partenaires';
import Scroller from './BoucleInfinis';


function Accueil() {

  return(<>
    <Hero>
    </Hero>
    <IconsAvantages></IconsAvantages>
    <TextImg/>
    <Steps/>
    <Solutions/>
    <Partenaires> <Scroller/> </Partenaires>
    
</>
  )
}



export default Accueil
