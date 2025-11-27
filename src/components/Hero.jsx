// Hero.tsx
import { CallToAction } from './CallToAction';
import useOnScreen from './utils/useScreen';
import "./css/components.css"
function Hero (){
  const [ref,isVisible] = useOnScreen({
    threshold : 0.5
  })
  return(<>
    <section className='h-[600px] flex flex-col text-white bg-black bg-center justify-center items-center relative bg-no-repeat' style={{backgroundSize : "100% 100%"}}>
     
<video
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
  src="/assets/backgroundVideo/background3.mp4"
  autoPlay
  muted
  loop
  playsInline
/>




   <div className='absolute w-full h-[600px]  bottom-0  flex bg-[#00000093] top-0' style={{backgroundSize : "100% "}}>

      </div>

      <div className={'flex flex-col items-center gap-1 text-[#fff]' }>
        <h1  className= {`lg:text-6xl lg:font-extrabold  sm:text-5xl font-bold text-4xl w-[90%] z-2 max-w-[800px] text-center fade-up ` + `${isVisible? "visible" : ""}`} ref={ref}>Convoyage de véhicules simple et sécurisé</h1>
        <p  className={`md:text-lg railway md:font-medium text-[1rem] text-center mt-9 max-w-[90%]  z-2 fade-up ` + `${isVisible? "visible" : ""}`}>Nous accompagnons les concessionnaires et les particuliers dans le transport de véhicules</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] text-center max-w-[90%]  z-2 fade-up ' + `${isVisible? "visible" : ""}`}>avec des solutions rapides, fiables et adaptées à chaque besoin.</p>
        <p className={'md:text-lg railway md:font-medium text-[1rem] text-center mb-9 max-w-[90%]  z-2 fade-up ' + `${isVisible? "visible" : ""}`  } ref={ref}>Obtenez dès maintenant une estimation gratuite pour votre convoyage.</p>

        <div className=' flex justify-center'>
          <CallToAction color={"bg-white prussColor px-8 animate-bounce hover:animate-none"} />
          </div>

      </div>
    
    </section>
   
  </>
  
  )
}

export default Hero

