export default function validateFormStep(data, step = 1) {
  const errors = {};

  if (step === 1) {
    // Step 1 : départ, arrivée, typeCar
    if (!data.depart || data.depart.trim() === "") {
      errors.depart = "Ville de départ obligatoire.";
    }
    if (!data.arrive || data.arrive.trim() === "") {
      errors.arrive = "Ville d'arrivée obligatoire.";
    }
    if (!data.typeCar || data.typeCar.trim() === "") {
      errors.typeCar = "Type de véhicule obligatoire.";
    }

    // Vérifie que départ ≠ arrivée
    if (data.depart && data.arrive && data.depart === data.arrive) {
      errors.arrive = "La ville d'arrivée doit être différente du départ.";
    }
  }

  if (step === 2) {
    // Step 2 : nom, mail, téléphone
    if (!data.name || data.name.trim() === "") {
      errors.name = "Le nom est obligatoire.";
    }

    if (!data.mail || data.mail.trim() === "") {
      errors.mail = "L'email est obligatoire.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.mail)) {
        errors.mail = "Adresse email invalide.";
      }
    }

    if (data.telephone && data.telephone.trim() !== "") {
      const digits = data.telephone.replace(/\D/g, ""); // retire tout sauf chiffres
      if (digits.length < 10) {
        errors.telephone = "Le numéro de téléphone doit contenir au moins 10 chiffres.";
      }
    }
  }

  // Si pas d'erreurs → "ok", sinon retourne l'objet des erreurs
  return Object.keys(errors).length === 0 ? "ok" : errors;
}
