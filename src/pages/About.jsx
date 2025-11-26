import { CallToAction } from '../components/CallToAction';
import Solutions from '../components/Solutions';
import TextImg from '../components/TextImg';
import Convoyeur from '../assets/conduit.svg'

export default function About (){
    return(
        <section >
           <AboutHero/>
           <TextImg img={Convoyeur} variant={{
            p:"prussColor",
            section:"bg-white ",
            h : "prussColor"
           }}
           title={"Notre histoire"}
           paragraphe={"Tout a commencé avec deux jeunes passionnés d’automobile, fans de belles mécaniques et d’expériences sur la route. De fil en aiguille, on a décidé de transformer cette passion en métier. L’idée était simple : offrir un service de convoyage digne des voitures qu’on transporte. Aujourd’hui, l’équipe s’est agrandie — mais l’esprit reste le même : plaisir, précision et professionnalisme."}
           
           />
           <Solutions
           style={{backgroundColor: "#000",color : "white"}}
           />
        </section>
    )
}





function AboutHero(){
  return(<>
    <section className='h-[600px] flex flex-col text-white bg-[url("../assets/HeroImg.svg")] justify-center items-center relative'>
      <div className='flex flex-col items-center gap-1'>
        <h1 className='lg:text-6xl lg:font-extrabold  sm:text-5xl font-bold text-4xl w-[90%] max-w-[800px] text-center  '>Qui sommes-nous ?</h1>
        <p className='md:text-lg railway md:font-medium text-[1rem] text-center mt-9 max-w-[90%]'>Chez Auto-Prestige, on ne se contente pas de transporter des voitures.</p>
        <p className='md:text-lg railway md:font-medium text-[1rem] text-center max-w-[90%]'> On véhicule une passion, un savoir-faire et une vraie exigence du détail.</p>
        <p className='md:text-lg railway md:font-medium text-[1rem] text-center max-w-[90%]'> Nous accompagnons les concessionnaires et les particuliers dans la livraison, le convoyage et la mise en main de leurs véhicules — </p>
                <p className='md:text-lg railway md:font-medium text-[1rem] text-center mb-9 max-w-[90%]'>toujours avec le sourire et la même rigueur.</p>
        <div className=' flex justify-center'>
          <CallToAction color={"bg-white prussColor "}/>
          </div>

      </div>
    
    </section>
   
  </>
  
  )
}
