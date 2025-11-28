import Step from "./Step";


function Steps(){

 
  const etapes = [
    {
    number : 1,
    title : "Devis instantané",
    content : "Remplissez notre formulaire en ligne pour obtenir rapidement une estimation gratuite, claire et sans engagement."
  },
     {
    number : 2,
    title : "Collecte du véhicule",
    content : "Un convoyeur professionnel se rend sur le lieu convenu pour récupérer le véhicule, avec vérification et état des lieux avant départ."
  },
     {
    number : 3,
    title : "Livraison sécurisée",
    content : "Votre véhicule est convoyé jusqu’à sa destination finale, dans le respect des délais, et livré en parfait état, généralement le jour même ou sous 24 heures."
  },
]
  
  return (<section className='bg-white py-5 flex flex-col items-center gap-2'>
      <h4 className='text-center roboto text-[#00305A] '>_____Rapide et simple_____ </h4>
        <h3 className='lg:text-4xl roboto lg:font-bold  md:text-4xl font-semibold text-3xl w-[90%] max-w-[500px]  text-[#00305A] text-center'>Comment ca marche ? </h3>
<div className=' w-full lg:py-5 lg:px-7 lg:justify-around md:gap-0 gap-6  border-black flex flex-col lg:flex-row items-center'>

{etapes.map((e,index)=>{
  return(<Step number={e.number} title={e.title} content={e.content} key={index}  />)
})}


</div>
    </section>
  )
}


export default Steps 