import { VEHICLE_PRICING, DEFAULT_VEHICLE_KEY } from "../../lib/pricing";

export default function RecapCard({ route, restitution, returnRoute, vehicleTypeKey, pricing }) {
  const vehicleLabel = pricing.usingDefaultVehicle
    ? `${VEHICLE_PRICING[DEFAULT_VEHICLE_KEY].label} (tarif de base)`
    : VEHICLE_PRICING[vehicleTypeKey]?.label || "—";
  const totalDistanceKm = restitution
    ? (route.distanceKm ?? 0) + (returnRoute?.distanceKm ?? 0)
    : route.distanceKm;
  const estimatedPrice = pricing.base != null ? pricing.base + (pricing.positioningCost ?? 0) : null;

  return (
    <div className="bg-surface border border-border-gold rounded-2xl p-5 flex flex-col gap-2 font-body text-sm text-offwhite/80 lg:sticky lg:top-24">
      <h4 className="font-heading text-gold text-lg mb-1">Récapitulatif</h4>
      <p>Trajet aller : <span className="text-offwhite">{route.depart} → {route.arrive}</span></p>
      {restitution && (
        <p>Trajet retour : <span className="text-offwhite">{returnRoute?.depart} → {returnRoute?.arrive}</span></p>
      )}
      <p>Distance{restitution ? " totale" : ""} : <span className="text-offwhite">{totalDistanceKm ? Math.round(totalDistanceKm) : "—"} km</span></p>
      <p>Véhicule : <span className="text-offwhite">{vehicleLabel}</span></p>
      <p>Prix estimé : <span className="text-offwhite">{estimatedPrice ?? "—"}€</span></p>
      <p>Options : <span className="text-offwhite">+{pricing.optionsTotal ?? 0}€</span></p>
      <div className="border-t border-border-gold mt-2 pt-2 flex justify-between items-center">
        <span className="font-semibold text-offwhite">TOTAL ESTIMÉ</span>
        <span className="font-numeric text-gold text-2xl">{pricing.total ?? "—"}€</span>
      </div>
    </div>
  );
}
