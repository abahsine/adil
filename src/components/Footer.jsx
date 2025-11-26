// Footer.tsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Footer ({}){
  return (
    <footer className='bg-[#191c1b]  gap-4  py-20 px-15 flex flex-col lg:flex-row justify-between'>
      <div className=' lg:h-full flex flex-col lg:w-2/5 text-white gap-5'>
        <h2 className='lg:text-5xl lg:font-extrabold  sm:text-4xl font-bold text-4xl w-[90%] max-w-[500px]  '>Auto-prestige</h2>
        <p>Prestige Auto est une entreprise spécialisée dans le convoyage de voitures de luxe et de collection. Nous assurons un transport sûr, rapide et soigné, avec un suivi personnalisé pour chaque véhicule. Notre expertise et notre sérieux font de nous le partenaire de confiance des passionnés d’automobile.</p>
         <div className=''>
          <h5 className='font-bold text-2xl montserrat '>Nous suivre</h5>
          <div className='text-white text-3xl flex gap-5 py-2'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTiktok/>
            <FaLinkedin/>
          </div>
          </div> 
      </div>
      <div className='  lg:w-1/5 text-[#F0F0FF] text-lg font-medium'>
          <h5 className='font-bold text-3xl montserrat text-white pb-3'>Liens utils</h5>
        <ul className='flex flex-col gap-3'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Demander un devis</Link></li>
            <li><Link to="/CGU">CGU/CGV</Link></li>


        </ul>
      </div>
        <div className='  lg:w-1/5 text-[#F0F0FF] text-lg font-medium'>
          <h5 className='font-bold text-3xl montserrat text-white pb-3'>Nos cordonnées </h5>
      <div>

        
      </div>
      </div>
    </footer>
  )
}

export default Footer
