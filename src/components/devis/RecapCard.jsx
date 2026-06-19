import { VEHICLE_PRICING } from "../../lib/pricing";

export default function RecapCard({ route, vehicleTypeKey, pricing }) {
  const vehicleLabel = VEHICLE_PRICING[vehicleTypeKey]?.label || "—";

  return (
    <div className="bg-surface border border-border-gold rounded-2xl p-5 flex flex-col gap-2 font-body text-sm text-offwhite/80 lg:sticky lg:top-24">
      <h4 className="font-heading text-gold text-lg mb-1">Récapitulatif</h4>
      <p>Trajet : <span className="text-offwhite">{route.depart} → {route.arrive}</span></p>
      <p>Distance : <span className="text-offwhite">{route.distanceKm ? Math.round(route.distanceKm) : "—"} km</span></p>
      <p>Véhicule : <span className="text-offwhite">{vehicleLabel}</span></p>
      <p>Prix de base : <span className="text-offwhite">{pricing.base ?? "—"}€</span></p>
      <p>Options : <span className="text-offwhite">+{pricing.optionsTotal ?? 0}€</span></p>
      <div className="border-t border-border-gold mt-2 pt-2 flex justify-between items-center">
        <span className="font-semibold text-offwhite">TOTAL ESTIMÉ</span>
        <span className="font-numeric text-gold text-2xl">{pricing.total ?? "—"}€</span>
      </div>
    </div>
  );
}
