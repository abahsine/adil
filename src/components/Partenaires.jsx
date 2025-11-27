import BoucleInfinis from './BoucleInfinite';

function Partenaires(){


  return (<section className=' py-5 flex flex-col items-center gap-2'>
      <h4 className='text-center text-[#555] '>_____Nos Partenaires_____ </h4>
        <h3 className='lg:text-5xl lg:font-extrabold  sm:text-4xl font-bold text-4xl w-[90%] max-w-[600px]   prussColor  text-center'>Ils nous font confiance </h3>

        <div className='flex gap-9 justify-around py-10 w-full overflow-x-scroll'>
       <BoucleInfinis liste={imageList()}/>
        </div>
      
    </section>
  )
}

const images = import.meta.glob('/src/assets/logos/*.png', { eager: true });
const imageList = () => {
  const listes = []
     Object.values(images).map((img, i) => (
        listes.push(<img key={i} src={img.default} className='w-[40%] lg:w-[50%]' alt={`img-${i}`} />)  
      ))
  return listes

  
};

export default Partenaires