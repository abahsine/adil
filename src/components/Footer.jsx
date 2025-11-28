// Footer.tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Footer ({}){
  return (
    <footer className='bg-[#191c1b]  lg:gap-4  py-10 px-15 flex flex-col lg:flex-row lg:justify-around items-around gap-10'>
      <div className=' lg:h-full flex flex-col lg:w-2/5 text-white border-b-3 lg:border-0 gap-4'>
        <img src="/logo.png" className='lg:text-5xl lg:font-extrabold  sm:text-4xl font-bold text-4xl w-[200px]  '></img>
        <p className="roboto text-sm leading-4 ">Prestige Auto est une entreprise spécialisée dans le convoyage de voitures de luxe et de collection. Nous assurons un transport sûr, rapide et soigné, avec un suivi personnalisé pour chaque véhicule. Notre expertise et notre sérieux font de nous le partenaire de confiance des passionnés d’automobile.</p>
         <div className='flex flex-col'>
          <h5 className='font-semibold text-xl montserrat gap-5 '>Suivez nous sur:</h5>
          <div className='text-white text-3xl flex gap-5 py-2 pb-10 lg:pb-2'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTiktok/>
            <FaLinkedin/>
          </div>
          </div> 
      </div>
      <div className='  lg:w-1/5 text-[#F0F0FF] text-lg font-medium border-b-3 lg:border-0'>
          <h5 className='font-bold text-3xl roboto text-[#fcaf09] pb-3'>Liens utils</h5>
        <ul className='flex flex-col gap-3 pb-10'>
            <li><Link className="hover:text-amber-600" to="/">Accueil</Link></li>
            <li><Link className="hover:text-amber-600" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-amber-600" to="/about">A propos</Link></li>
            <li><Link className="hover:text-amber-600" to="/services">Services</Link></li>
            <li><Link className="hover:text-amber-600" to="/contact">Demander un devis</Link></li>
            <li><Link className="hover:text-amber-600" to="/CGU">CGU/CGV</Link></li>


        </ul>
      </div>
        <div className='  lg:w-2/6 text-[#F0F0FF] text-lg font-medium flex flex-col items-center lg:gap-15  '>
          <h5 className='font-bold text-3xl montserrat text-[#fcaf09] pb-3'>Nos cordonnées </h5>
      <div className="text-xl font-semibold flex flex-col gap-4   ">
          <p className="">Adresse : <span className="font-medium text-lg">12 Rue de l’Exemple, 75000 Paris</span></p>
  <p>Téléphone : <span className="font-medium text-lg">+33(0)7 45 34 23</span></p>
  <p>Email : <span className="font-medium text-lg">12 Rue de l’Exemple, 75000 Paris</span></p>
        
      </div>
      </div>
    </footer>
  )
}

export default Footer
