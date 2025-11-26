import React from "react";
import "../App.css"

function BoucleInfinis ({liste }){


    return (

        <div className="flex justify-center ">
  <div className="carousel w-[100%]  flex overflow-x-auto  " >
     
        <div className="group flex items-center justify-center  gap-4 ">

               {liste.map((element, index)=>{
           return( <div key={index} className="card  h-[300px] w-[500px] flex justify-center items-center flex-[0 0 5em]">{element}</div>)
               
        })}
           

        </div>
         <div className="group flex items-center justify-center  gap-[1em] " aria-hidden={false}>
          
               {liste.map((element, index)=>{
           return( <div key={index} className="card  h-[300px] w-[500px] flex justify-center items-center flex-[0 0 5em]">{element}</div>)
               
        })}

        </div>
      </div>
        </div>
    
       
    )
}

export default BoucleInfinis