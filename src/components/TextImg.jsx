// TextImg.tsx
import Main_a_main from "/assets/hero/subHero.jpg";
import { CallToAction } from './CallToAction';

export default function TextImg ({img=Main_a_main ,variant={},title,paragraphe}){
  return(
    <section className={'py-4 sm:py-16 flex lg:flex-row  flex-col-reverse lg:px-16 bg-[#111] rounded-t-2xl ' + variant.section}>
        <div className='flex flex-col gap-7 my-10 lg:my-0 px-8 items-center lg:justify-center lg:px-[100px] flex-1 '>
          <h2 className={'montserrat lg:font-extrabold lg:text-4xl md:text-3xl text-3xl font-bold text-white leading-9 space-y-10 lg:max-w-2/3 self-start ' + variant.h}>{title? title: "Nos atouts, votre tranquillité"}</h2>
          <p className={'text-[white] text-lg font-medium  ' + variant.p}>{paragraphe? paragraphe : "Bénéficiez d’un service de convoyage rapide, fiable et transparent, pensé pour simplifier vos déplacements de véhicules en toute sérénité."}</p>
            <CallToAction color={ "bg-[#E4BB39] text-black " } />
        </div>
        <div className='flex justify-center  flex-1'>
          <img src={img} alt="Client a  recu sa voiture" className='w-[90%] xl:w-[500px] max-w-[800px] rounded-xl' />
        </div>
    </section>
  )
}
