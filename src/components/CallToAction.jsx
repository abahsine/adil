import { Link } from "react-router-dom";

// CallToAction.tsx
export function CallToAction({ color, content="Demander un devis",style={} }) {
  return (
    <Link
      to="/contact"
      className={`px-3  whitespace-nowrap text-black md:font-bold font-normal text-md raleway py-3 px-2 rounded-[10px]  bg-amber-400 ${color} `}
    style={style}
    >
   {content}
    </Link>
  );
}

