import React from "react";
import { useState } from "react";
export default function Galerie() {
  // Liste d'images (tu remplaces par tes vraies URLs)
 const arriveeVilles = [
  // Belgique
  "Bruxelles",
  "Anvers",
  "Gand",
  "Liège",
  "Bruges",

  // Espagne
  "Madrid",
  "Barcelone",
  "Valence",
  "Séville",
  "Bilbao",

  // France (différentes de la liste départ)
  "Caen",
  "Brest",
  "Angers",
  "Toulon",
  "Besançon",
  "Limoges",
  "Tours",
  "Mulhouse",
  "Amiens",
  "Troyes"
];
const departVilles = [
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Nice", "Nantes", "Strasbourg", "Montpellier", "Lille",
  "Grenoble", "Dijon", "Rennes", "Le Havre", "Reims",
  "Clermont-Ferrand", "Nancy", "Metz", "Perpignan", "Poitiers"
];
 const images = import.meta.glob('/public/assets/galerie/*.jpeg', { eager: true });
const imageList = () => {
  const listes = []
     Object.values(images).map((img, i) => (
     
        listes.push(<img key={i}  src={img.default} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"   alt={`img-${i}`} />)  
      ))
  return listes
};

  const listeImages = imageList()
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(listeImages[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-16">
      
      {/* Titre */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#00305A]">
          Galerie de Nos Convoyages
        </h1>
         <div className="mt-4 h-[3px] w-40 lg:w-80 bg-amber-400 mx-auto rounded-full"></div>
        <p className="mt-2 text-gray-600 text-lg max-w-xl mx-auto">
          Découvrez quelques exemples de véhicules que nous avons convoyés à travers toute la France.
        </p>
       
      </div>

      {/* Galerie */}
      <div 
     onClick={() => setOpen(true)}
     
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageList().map((img, index) => (
          
          

          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            
           {img}

            {/* overlay */}
            <div className="absolute inset-0 bg-[#00305A]/0 group-hover:bg-[#00305A]/40 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition">
              {departVilles[index]} à  {arriveeVilles[index]}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer message */}
      <p className="text-center mt-12 text-gray-500">
        Vous souhaitez ajouter votre véhicule à notre galerie ? Contactez-nous.
      </p>
    </div>
  );
}




function ModalImage({ open, onClose, image }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="
        bg-white rounded-lg shadow-lg p-4 w-[90%] max-w-md
        animate-slideUp
      ">
        {/* Titre */}
        <h2 className="text-center text-lg font-semibold text-[#00305A] mb-3">
          Photo envoyée
        </h2>

        {/* Image */}
        <img 
          src={image} 
          alt="photo envoyée" 
          className="w-full h-64 object-cover rounded-md"
        />

        {/* Bouton fermer */}
        <button 
          onClick={onClose} 
          className="mt-4 w-full bg-amber-400 hover:bg-amber-500 transition text-white font-semibold py-2 rounded-md"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

