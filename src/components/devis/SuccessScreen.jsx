import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SuccessScreen({ loading, onClose }) {
  useEffect(() => {
    if (loading) return;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C9A84C", "#E0C77A", "#F5F5F0"],
    });
  }, [loading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
      <div className="bg-surface border border-border-gold rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        {loading ? (
          <p className="font-body text-offwhite/80">Envoi de votre demande...</p>
        ) : (
          <>
            <h2 className="text-xl font-heading text-gold mb-4">Demande envoyée !</h2>
            <p className="text-offwhite/80 mb-6">
              Votre demande a bien été reçue. Notre équipe vous contacte sous 2h.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gold text-black rounded-xl font-bold cursor-pointer hover:bg-gold-light transition"
            >
              Fermer
            </button>
          </>
        )}
      </div>
    </div>
  );
}
