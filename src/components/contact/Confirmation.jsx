export default function ConfirmationMessage({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Demande envoyée !</h2>
        <p className="text-gray-600 mb-6">
          Merci, votre demande a bien été prise en compte. 
          Nous traiterons votre demande dans les plus brefs délais.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
