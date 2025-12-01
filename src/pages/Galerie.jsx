import React from "react";
import { useState } from "react";
export default function Galerie() {
const departVilles = [
  // France
  "Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux",
  "Nice", "Nantes", "Strasbourg", "Montpellier", "Lille",
  "Grenoble", "Dijon", "Rennes", "Le Havre", "Reims",
  "Clermont-Ferrand", "Nancy", "Metz", "Perpignan", "Poitiers",
  "Orléans", "Tours", "Aix-en-Provence", "La Rochelle", "Avignon",
  
  // Belgique
  "Namur", "Charleroi",

  // Espagne
  "Zaragoza", "Murcia",

  // Allemagne
  "Munich", "Hambourg", "Hanovre", "Francfort",

  // Suisse
  "Lausanne", "Lugano"
];
const arriveeVilles = [
  // Belgique
  "Bruxelles", "Anvers", "Gand", "Liège", "Bruges", "Leuven",

  // Espagne
  "Madrid", "Barcelone", "Valence", "Séville", "Bilbao",
  "Málaga", "Salamanque",

  // France (aucune présente dans departVilles)
  "Caen", "Brest", "Roma", "Besançon", "Limoges",
  "Mulhouse", "Amiens", "Troyes", "Besançon", "Chambéry",
  "Milan", "Colmar", "Besançon", "Ajaccio",

  // Allemagne
  "Berlin", "Düsseldorf", "Stuttgart", "Leipzig", "Dresde",

  // Suisse
  "Genève", "Bâle", "Zurich", "Saint-Gall"
];

 const images = import.meta.glob('/public/assets/galerie/*.webp', { eager: true });
const imageList = () => {
  const listes = []
     Object.values(images).map((img, i) => (
     
        listes.push(<img key={i}  src={img.default} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"   alt={`img-${i}`} />)  
      ))
  return listes
};


  

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
 
     
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imageList().map((img, index) => (
          
          

          <div
            key={index}
            className="e overflow-hidden rounded-lg shadow-md relative"
          >
            
           {img}

            {/* overlay */}
          
              <span className="text-white text-lg w-full  text-center bg-[#0000006c] absolute bottom-5">
              {departVilles[index]} - {arriveeVilles[index]}
              </span>
          
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






