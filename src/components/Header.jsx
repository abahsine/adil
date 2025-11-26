// Header.tsx
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import { CallToAction } from './CallToAction';
import { NavLink } from 'react-router-dom';
import Logo from '/logo.png'

function Header(){

  const [isOpen, setOpen] = useState(false)
 
  return (<header className='py-3 px-2 flex sm:py-0 sm:px-10   text-white text-lg backBlack items-center montserrat lg:justify-between justify-between relative'>
  
 {<img src={Logo} className='h-[80px] flex py-2 md:pl-3  '></img>}

  
  {window.innerWidth < 1024 && (
    <Hamburger  toggled={isOpen} toggle={setOpen} />
  )}
  {/* Menu */}
  <ul
    className={`

      lg:flex-2 
      flex lg:gap-6  gap-1
      z-20
      lg:flex-row lg:static 
      ${isOpen ? "flex lg:flex" : "hidden lg:flex"}      
      flex-col  
      absolute top-full right-0  w-2/3  max-w-[350px]   lg:max-w-[100%]
      bg-black/90 text-white p-4 mt-0       
      lg:bg-transparent lg:text-inherit lg:p-0 lg:mt-0
      lg:whitespace-nowrap  lg:justify-center
     
     
      
    `}
  >
    <li><NavLink to="/" 
    onClick={()=>{setOpen(!isOpen)}}
    className={({isActive})=>{
     return  isActive? "text-amber-300" : ""
    }}
    >Accueil</NavLink></li>
    <li><NavLink 
     onClick={()=>{setOpen(!isOpen)}}
    className={({isActive})=>{
     return  isActive? "text-amber-300" : ""
    }}  to="services">Services</NavLink ></li>
    <li className='hover:text-amber-300 hover:border-b-2 hover:border-amber-600 hover:pb-3'><NavLink 
     onClick={()=>{setOpen(!isOpen)}}
    className={({isActive})=>{
     return  isActive? "text-amber-300" : ""
    }}  to="about">A propos</NavLink ></li>
    <li><NavLink  
     onClick={()=>{setOpen(!isOpen)}}
    to="contact">Contact</NavLink ></li>
    <li><NavLink 
     onClick={()=>{setOpen(!isOpen)}}
    className={({isActive})=>{
     return  isActive? "text-amber-300" : ""
    }}  to="contact">Nous Contacter</NavLink ></li>
    <li className="my-3 md:my-0"  onClick={()=>{setOpen(!isOpen)}}><CallToAction color={"my-3 md:my-0 "} style={{color : "black"}} /></li>
  </ul>

</header>
)
}

function Navlink({}){
  return(
    <></>
  )
}



export default Header