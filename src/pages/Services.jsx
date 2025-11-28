import About2 from "/assets/hero/mise_en_main.jpg";
import About1 from "/assets/services/service1.jpeg";
import About3 from "/assets/hero/watchingCar1.jpeg";

import TitleParagraphe from "../components/componentServices/TitleParagraphe";
import LateraleImg from "../components/componentServices/LateraleImg";



export default function Services() {
  const titles = [
    "Votre véhicule livré en toute confiance",
    "Offrez une expérience de livraison irréprochable",
    "Faites briller votre véhicule comme jamais",
  ];
  const paragraphes = [
    "Vous voulez que vos véhicules arrivent vite et en toute sécurité ? Notre convoyeur s’occupe de tout, en conduisant lui-même votre voiture jusqu’au client. Fini le stress, fini les galères logistiques",
    "Avec notre service de mise en main, fini le stress et les questions ! On vous montre tout ce que votre voiture peut faire, pour que chaque trajet soit un plaisir dès le départ.",
    "Votre voiture mérite mieux qu’un simple coup d’éponge. Avec notre service de nettoyage complet, on la remet à neuf, dedans comme dehors, pour qu’elle brille comme au premier jour.",
  ];

  const details = [
    {
      textBolder: "Livraison rapide et fiable : ",
      textMedium: "votre véhicule arrive dans les délais, sans surprises.",
    },
    {
      textBolder: "Confiance totale : ",
      textMedium:
        "un professionnel conduit votre véhicule avec soin, comme si c’était le sien.",
    },
    {
      textBolder: "Suivi transparent : ",
      textMedium: "vous savez où est votre véhicule à tout moment.",
    },

    {
      textBolder: "Offrez une livraison parfaite : ",
      textMedium:
        "vos clients découvrent leur véhicule avec confiance et sérénité.",
    },
    {
      textBolder: "Valorisez votre image : ",
      textMedium:
        "chaque mise en main reflète le professionnalisme de votre concession.",
    },
    {
      textBolder: "Libérez vos équipes : ",
      textMedium:
        "nous prenons en charge la présentation complète pour un client pleinement satisfait.",
    },

    {
      textBolder: "Lavage haute précision : ",
      textMedium:
        "élimination complète des saletés, insectes et résidus routiers.",
    },
    {
      textBolder: "Brillance miroir : ",
      textMedium:
        "séchage manuel, finitions détaillées, vitres et jantes impeccables.",
    },
    {
      textBolder: "Finition premium : ",
      textMedium:
        "votre voiture ressort comme neuve, prête à attirer les regards.",
    },
  ];

  return (
    <>
      <TitleParagraphe
        titre={"Nos Solutions"}
        slogan={"_____Service Excellence_____ "}
      />
      <LateraleImg
        titre={titles[0]}
        paragraphe={paragraphes[0]}
        details={details.slice(0, 3)}
        img = {About1}
      />
      <LateraleImg
        titre={titles[1]}
        paragraphe={paragraphes[1]}
        details={details.slice(3, 6)}
         img = {About2}
        blue={true}
      />
      <LateraleImg
        titre={titles[2]}
        paragraphe={paragraphes[2]}
        details={details.slice(6, 9)}
         img = {About3}
      />
    </>
  );
}