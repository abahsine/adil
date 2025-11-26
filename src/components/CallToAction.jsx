import { Link } from "react-router-dom";

// CallToAction.tsx
export function CallToAction({ color, content="Demander un devis",style={} }) {
  return (
    <Link
      to="/contact"
      className={`px-3  whitespace-nowrap text-black font-bold py-3 px-2 rounded-[10px]  bg-[#E4BB39] ${color} `}
    style={style}
    >
   {content}
    </Link>
  );
}

