import "../App.css"

import { useEffect } from "react";

const images = import.meta.glob('/src/assets/logos/*.png', { eager: true });
const imageList = () => {
  const listes = []
     Object.values(images).map((img, i) => (
        listes.push(<img key={i} src={img.default} className='w-[200px] lg:w-[300px]' alt={`img-${i}`} />)  
      ))
  return listes

  
};


export default function Scroller() {

const ImagesLogo = imageList()

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // Si l'utilisateur ne demande pas de réduire les animations
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // [] = exécute une seule fois après le rendu initial

  return (
<div className="flex justify-center  ">
<div className ="scroller" data-speed="fast">
  <ul className ="tag-list scroller__inner">
    {ImagesLogo.map((element,index)=>{
        return <li key={index}>{element}</li>
    })}
  </ul>
</div>




 
</div>

   
  );
}
