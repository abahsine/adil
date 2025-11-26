// Hero.tsx
import { CallToAction } from './CallToAction';
import useOnScreen from './utils/useScreen';

function Hero (){
  const [ref,isVisible] = useOnScreen({
    threshold : 0.5
  })
  return(<>
    <section className='h-[600px] flex flex-col text-white bg-[url("assets/HeroImg.svg")]  bg-center justify-center items-center relative bg-no-repeat' style={{backgroundSize : "100% 100%"}}>
      <div className='absolute w-full h-[100px] bottom-0  flex bg-[url("assets/footerBack.svg")] p-0 bg-no-repeat bg-bottom mb-[-6px]' style={{backgroundSize : "100% "}}>

      </div>
      <div className={'flex flex-col items-center gap-1' }>
        <h1 ref={ref} className= {`lg:text-6xl lg:font-extrabold  sm:text-5xl font-bold text-4xl w-[90%] max-w-[800px] text-center fade-up ${isVisible? "visible" : ""}`}>Convoyage de véhicules simple et sécurisé</h1>
        <p ref={ref} className={`md:text-lg railway md:font-medium text-[1rem] text-center mt-9 max-w-[90%] fade-up ${isVisible? "visible" : ""}`}>Nous accompagnons les concessionnaires et les particuliers dans le transport de véhicules</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] text-center max-w-[90%]' + ` fade-up ${isVisible? "visible" : ""}`}>avec des solutions rapides, fiables et adaptées à chaque besoin.</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] text-center mb-9 max-w-[90%] ' + ` fade-up ${isVisible? "visible" : ""}`}>Obtenez dès maintenant une estimation gratuite pour votre convoyage.</p>

        <div className=' flex justify-center'>
          <CallToAction color={"bg-white prussColor px-8 animate-bounce hover:animate-none"} />
          </div>

      </div>
    
    </section>
   
  </>
  
  )
}

export default Hero

