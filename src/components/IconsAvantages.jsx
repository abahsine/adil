// IconsAvantages.tsx
import { IoIosSpeedometer,IoLogoEuro  } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { IconAvantage } from './IconAvantage';

function IconsAvantages(){

  const listeIcons = [
    {
      title : "Sécurité garantie",
    icon  : <MdWorkspacePremium style={{fontSize : "3rem",color : "#00305A"}}/>
    },
       {
      title : "Service rapide",
    icon  : <IoIosSpeedometer style={{fontSize : "3rem",color : "#00305A"}}/>
    },
       {
      title : "Suivi en temps réel",
    icon  : <FaLocationDot style={{fontSize : "3rem",color : "#00305A"}}/>
    },
       {
      title : "Tarif economique",
    icon  : <IoLogoEuro style={{fontSize : "3rem",color : "#00305A"}}/>
    },

  ]
  return(<section className='flex flex-col lg:flex-row py-10 gap-8  bg-white justify-around '>
      
      {listeIcons.map((element,index)=>{
        return (
          <IconAvantage key={index} content={element.title}> 
          {element.icon}
          </IconAvantage>
        )
      })}
  </section>)
}

export default IconsAvantages