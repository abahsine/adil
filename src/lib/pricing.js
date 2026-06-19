export const PER_KM_MIN = 0.75;
export const PER_KM_MAX = 0.90;
export const DIESEL_SURCHARGE = 0.03; // +3% pour les catégories majoritairement diesel (consommation plus élevée)

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
  return distanceKm * avgPerKm * dieselMultiplier(vehicleTypeKey);
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

export function computeRange(vehicleTypeKey, distanceKm) {
  if (!VEHICLE_PRICING[vehicleTypeKey] || !Number.isFinite(distanceKm)) {
    return { min: null, max: null };
  }
  const multiplier = dieselMultiplier(vehicleTypeKey);
  return {
    min: Math.round(distanceKm * PER_KM_MIN * multiplier),
    max: Math.round(distanceKm * PER_KM_MAX * multiplier),
  };
}

export function computeQuote({ vehicleTypeKey, distanceKm, selectedOptionKeys = [] }) {
  const base = computeBasePrice(vehicleTypeKey, distanceKm);
  if (base === null) {
    return { base: null, optionsTotal: 0, total: null, range: { min: null, max: null } };
  }
  const optionsTotal = computeOptionsTotal(base, selectedOptionKeys);
  const total = Math.round(base + optionsTotal);
  return { base: Math.round(base), optionsTotal: Math.round(optionsTotal), total, range: computeRange(vehicleTypeKey, distanceKm) };
}
