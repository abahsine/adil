// Solutions.tsx
import  Pancarte  from './Pancarte';
import Convoyeur from '/assets/hero/text-image.jpeg';
import MiseEnMain from '/assets/hero/mise_en_main.jpg';
import Lavage from '/assets/hero/watchingCar2.jpeg';

export default function Solutions ({style={}}){
  const Pancartes = [
    {
      title : "Convoyage véhicules",
      img : Convoyeur,
      content : "Transport de véhicules pour particuliers et concessionnaires, avec ponctualité et sécurité garanties à chaque trajet. Nos convoyeurs expérimentés assurent la prise en charge, le suivi et la livraison de votre véhicule partout en France, dans le respect des délais et avec un soin particulier à chaque étape."
    },
     {
      title : "Mise en main",
      img : MiseEnMain,
      content : "Remise personnalisée du véhicule à son nouveau propriétaire, avec explication complète des fonctionnalités et conseils d’utilisation. Nos convoyeurs prennent le temps d’assurer une transition fluide et professionnelle, pour une expérience client positive dès la première prise en main."
    },
     {
      title : "Nettoyage extérieur",
      img : Lavage,
      content : "Préparation soignée de vos véhicules avant leur livraison ou exposition. Nous réalisons un lavage complet, du châssis à la carrosserie, pour garantir une présentation impeccable et valoriser votre image auprès de vos clients. Chaque détail compte pour un rendu professionnel et irréprochable."
    }
  ]

  return(
   <section
  className="flex flex-col bg-gradient-to-t from-[#000] to-[rgba(255,255,255,0.2)] items-center"
  style={style} // style global si défini
>
  <h1
    className="lg:text-5xl lg:font-extrabold sm:text-4xl font-bold text-4xl w-[90%] max-w-[500px] mt-8 prussColor text-center"
    style={!style || Object.keys(style).length === 0 ? undefined : { color: "#fff" }}
  >
    Nos solutions
  </h1>

  <div className="flex flex-col lg:flex-row my-10 lg:justify-around items-center gap-8">
    {Pancartes.map((element, key) => (
      <Pancarte key={key} title={element.title} content={element.content} img={element.img} />
    ))}
  </div>
</section>

  )
}