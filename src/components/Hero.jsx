// Hero.tsx
import { CallToAction } from './CallToAction';
import useOnScreen from './utils/useScreen';
import "./css/components.css"
import { Link } from 'react-router-dom';
function Hero (){
  const [ref,isVisible] = useOnScreen({
    threshold : 0.5
  })
  return(<>
    <section className='h-[600px] flex flex-col text-white bg-black bg-center justify-center items-center relative bg-no-repeat' style={{backgroundSize : "100% 100%"}}>
     
<img
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
  src="/assets/backgroundVideo/backHero.jpg"

/>

  <Link to={"/contact"} className='w-full md:h-[50px]  py-0.5 bg-amber-400 absolute top-0 flex text-[#00305a] z-3 md:font-bold font-medium justify-center items-center hover:text-white'>
        <p className='text-center roboto'><span className='font-bold block'>Profitez de 20% de réduction sur</span> votre premier convoyage !</p>
  </Link>


   <div className='absolute w-full h-[600px]  bottom-0  flex bg-[#0000007c] top-0' style={{backgroundSize : "100% "}}>

      </div>

      <div className={'flex flex-col items-center gap-1 text-[#fff]' }>
        <h1  className= {`lg:text-6xl roboto lg:font-extrabold  sm:text-5xl font-semibold  text-4xl w-[90%] text-center z-2 max-w-[800px] md:text-center fade-up ` + `${isVisible? "visible" : ""}`} ref={ref}>Convoyage de véhicules <span className='block md:inline italic py-2'> simple et sécurisé</span></h1>
        <p  className={`md:text-lg railway md:font-medium text-[1rem] leading-5 italic font-light pt-3 text-center mt-6 max-w-[90%]  z-2 fade-up ` + `${isVisible? "visible" : ""}`}>Nous accompagnons les concessionnaires et les particuliers dans le transport de véhicules</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] leading-5 italic font-light text-center max-w-[90%]  z-2 fade-up ' + `${isVisible? "visible" : ""}`}>avec des solutions rapides, fiables et adaptées à chaque besoin.</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] leading-5 py-5 font-semibold text-center mb-9 max-w-[90%]  z-2 fade-up ' + `${isVisible? "visible" : ""}`  } ref={ref}>Obtenez dès maintenant une estimation gratuite pour votre convoyage.</p>

        <div className=' flex justify-center'>
          <CallToAction color={"bg-white prussColor px-8 animate-bounce hover:animate-none"} />
          </div>

      </div>
    
    </section>
   
  </>
  
  )
}

export default Hero

