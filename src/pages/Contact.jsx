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
        </p>

        <p className="text-gray-200">
          <span className="font-semibold text-amber-400">Email :</span><br />
          <a href="mailto:ad.94auto@gmail.com" className="underline hover:text-amber-300">
            ad.94auto@gmail.com
          </a>
        </p>

      </div>
    </div>
  );
}
