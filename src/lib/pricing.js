// ---------------------------------------------------------------------------
// FICHIER UNIQUE DE TARIFICATION — toutes les valeurs (€/km, options, etc.)
// utilisées pour calculer un devis se trouvent dans ce fichier.
// ---------------------------------------------------------------------------

// Adresse du siège : point de départ/retour du convoyeur (déplacement en train)
export const COMPANY_ADDRESS = "113 rue Marcel Hartmann, 94000 Ivry-sur-Seine";

// Tarif au km pour le trajet du véhicule convoyé
export const PER_KM_MIN = 0.65;
export const PER_KM_MAX = 0.80;
export const DIESEL_SURCHARGE = 0.03; // +3% pour les catégories majoritairement diesel (consommation plus élevée)
export const DEFAULT_VEHICLE_KEY = "Citadine"; // tarif de base utilisé quand aucun véhicule n'est encore sélectionné
export const MIN_SERVICE_PRICE = 75; // prix minimum de la prestation au kilométrage, hors frais de déplacement

// Tarif au km pour le déplacement du convoyeur en train (siège -> ville de départ, puis ville d'arrivée -> siège)
export const POSITIONING_RATE_PER_KM = 0.20;

export const VEHICLE_PRICING = {
  Citadine: { label: "Citadine", diesel: false },
  berline: { label: "Berline", diesel: false },
  sportive_250ch: { label: "Sportive +250 ch", diesel: false },
  Monospace: { label: "Monospace", diesel: true },
  "4x4/Suv": { label: "4x4 / SUV", diesel: true },
  electrique: { label: "Électrique 100 %", diesel: false },
  utilitaire_3_9: { label: "Utilitaire 3–9 m³", diesel: true },
  utilitaire_10_19: { label: "Utilitaire 10–19 m³", diesel: true },
  utilitaire_20_plus: { label: "Utilitaire +20 m³", diesel: true },
  Caravane: { label: "Caravane", diesel: true },
  Nacelle: { label: "Nacelle", diesel: true },
};

export const OPTION_PRICING = {
  lavageExterieur: { type: "flat", amount: 10, label: "Lavage extérieur" },
  plaqueWGarage: { type: "flat", amount: 30, label: "Plaque W garage" },
  pvPapier: { type: "flat", amount: 3, label: "PV papier" },
  pressionPneus: { type: "flat", amount: 0, label: "Pression des pneus" },
  rechangeLaveGlace: { type: "flat", amount: 10, label: "Rechange lave-glace" },
  miseEnMain: { type: "flat", amount: 10, label: "Mise en main" },
  lavageInterieur: { type: "flat", amount: 10, label: "Lavage intérieur" },
  verificationAccessoires: { type: "flat", amount: 0, label: "Vérification des accessoires" },
  pvDematerialise: { type: "flat", amount: 10, label: "PV dématérialisé" },
};

function dieselMultiplier(vehicleTypeKey) {
  return VEHICLE_PRICING[vehicleTypeKey]?.diesel ? 1 + DIESEL_SURCHARGE : 1;
}

export function computeBasePrice(vehicleTypeKey, distanceKm) {
  if (!VEHICLE_PRICING[vehicleTypeKey] || !Number.isFinite(distanceKm)) return null;
  const avgPerKm = (PER_KM_MIN + PER_KM_MAX) / 2;
  const raw = distanceKm * avgPerKm * dieselMultiplier(vehicleTypeKey);
  return Math.max(raw, MIN_SERVICE_PRICE);
}

// Frais de déplacement du convoyeur (en train) : siège -> ville de départ + ville d'arrivée -> siège.
// En cas de restitution (aller + retour), on ne compte que la ville de départ du 1er trajet
// et la ville d'arrivée du 2e trajet, jamais les deux trajets séparément.
export function computePositioningCost(positioningKm) {
  if (!Number.isFinite(positioningKm)) return 0;
  return positioningKm * POSITIONING_RATE_PER_KM;
}

export function computeOptionsTotal(basePrice, selectedOptionKeys = []) {
  if (!Number.isFinite(basePrice)) return 0;
  let flatTotal = 0;
  let percentTotal = 0;
  for (const key of selectedOptionKeys) {
    const option = OPTION_PRICING[key];
    if (!option) continue;
    if (option.type === "flat") flatTotal += option.amount;
    if (option.type === "percent") percentTotal += basePrice * option.amount;
  }
  return flatTotal + percentTotal;
}

export function computeRange(vehicleTypeKey, distanceKm, positioningKm = 0) {
  if (!VEHICLE_PRICING[vehicleTypeKey] || !Number.isFinite(distanceKm)) {
    return { min: null, max: null };
  }
  const multiplier = dieselMultiplier(vehicleTypeKey);
  const positioningCost = computePositioningCost(positioningKm);
  // On prend le plus petit/plus grand tarif au km (peu importe l'ordre des constantes
  // PER_KM_MIN/PER_KM_MAX) pour garantir que "min" est toujours <= "max" à l'affichage.
  const lowRate = Math.min(PER_KM_MIN, PER_KM_MAX);
  const highRate = Math.max(PER_KM_MIN, PER_KM_MAX);
  const rawMin = distanceKm * lowRate * multiplier;
  const rawMax = distanceKm * highRate * multiplier;
  return {
    min: Math.round(Math.max(rawMin, MIN_SERVICE_PRICE) + positioningCost),
    max: Math.round(Math.max(rawMax, MIN_SERVICE_PRICE) + positioningCost),
  };
}

export function computeQuote({ vehicleTypeKey, distanceKm, positioningKm = 0, selectedOptionKeys = [] }) {
  const base = computeBasePrice(vehicleTypeKey, distanceKm);
  if (base === null) {
    return { base: null, positioningCost: 0, optionsTotal: 0, total: null, range: { min: null, max: null } };
  }
  const positioningCost = computePositioningCost(positioningKm);
  const optionsTotal = computeOptionsTotal(base, selectedOptionKeys);
  const roundedBase = Math.round(base);
  const roundedPositioningCost = Math.round(positioningCost);
  const roundedOptionsTotal = Math.round(optionsTotal);
  // On additionne les montants déjà arrondis (et non la somme brute) pour que
  // "Prix estimé" + "Options" corresponde toujours exactement au "TOTAL ESTIMÉ" affichés.
  const total = roundedBase + roundedPositioningCost + roundedOptionsTotal;
  return {
    base: roundedBase,
    positioningCost: roundedPositioningCost,
    optionsTotal: roundedOptionsTotal,
    total,
    range: computeRange(vehicleTypeKey, distanceKm, positioningKm),
  };
}
