import BoucleInfinis from './BoucleInfinite';

function Partenaires({children}){


  return (<section className=' py-5 flex flex-col items-center gap-2'>
      <h4 className='text-center text-[#555] '>_____Nos Partenaires_____ </h4>
        <h3 className='lg:text-4xl lg:font-extrabold  sm:text-3xl font-bold text-2xl w-[90%] max-w-[600px]   prussColor  text-center'>Ils nous font confiance </h3>

       
       {children}
    </section>
  )
}



export default Partenaires