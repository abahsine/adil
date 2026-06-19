import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a1a2a] flex items-center justify-center px-6 py-5">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-10 max-w-xl w-full">

        <h1 className="text-3xl font-bold text-amber-400 mb-6 text-center">
          Contact
        </h1>

        <p className="text-gray-200 mb-4">
          <span className="font-semibold text-amber-400">Adresse :</span><br />
          113 rue Marcel Hartmann,<br />
          94000 Ivry-sur-Seine
        </p>

        <p className="text-gray-200 mb-4">
          <span className="font-semibold text-amber-400">Téléphone :</span><br />
          <a href="tel:+33617759888" className="underline hover:text-amber-300">
            +33 6 17 75 98 88
          </a>
          <br />
          <a href="tel:+33659427955" className="underline hover:text-amber-300">
            +33 6 59 42 79 55
          </a>
        </p>

        <p className="text-gray-200 mb-6">
          <span className="font-semibold text-amber-400">Email :</span><br />
          <a href="mailto:contact@auto-prestigee.com" className="underline hover:text-amber-300">
            contact@auto-prestigee.com
          </a>
        </p>

        <div className="flex flex-col">
          <span className="font-semibold text-amber-400 mb-2">Suivez-nous :</span>
          <div className="flex gap-5 text-3xl text-gray-200">
            <a href="https://www.facebook.com/share/1EiVgt54V6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-amber-300">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/auto_prestige94?igsh=eWVwYWd5bHlxaGV5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-amber-300">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@adilchejri?_r=1&_t=ZN-97LHd42jlrC" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-amber-300">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
