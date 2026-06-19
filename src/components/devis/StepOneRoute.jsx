import { IoLocationSharp } from "react-icons/io5";
import AddressAutocomplete from "../contact/googleApi";
import VehicleTypeCards from "./VehicleTypeCards";
import MapPanel from "./MapPanel";
import useCountUp from "../../hooks/useCountUp";

export default function StepOneRoute({ route, vehicleTypeKey, pricing, onRouteChange, onVehicleChange, onNext, errors }) {
  const handleAddressChange = (e) => onRouteChange({ [e.target.name]: e.target.value });

  const handleRouteComputed = (result) => {
    if (result.error) {
      onRouteChange({ distanceKm: null, durationMin: null, error: result.error });
    } else {
      onRouteChange({ distanceKm: result.distanceKm, durationMin: result.durationMin, error: "" });
    }
  };

  const animatedMin = useCountUp(pricing.range.min || 0, pricing.range.min != null);
  const animatedMax = useCountUp(pricing.range.max || 0, pricing.range.max != null);
  const canContinue = route.depart && route.arrive && vehicleTypeKey && pricing.total;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto px-4 lg:h-[600px]">
      <div className="flex-1 h-[300px] lg:h-full rounded-2xl overflow-hidden border border-border-gold order-2 lg:order-1">
        <MapPanel depart={route.depart} arrive={route.arrive} onRouteComputed={handleRouteComputed} />
      </div>

      <div className="flex-1 flex flex-col gap-4 bg-bg order-1 lg:order-2">
        <AddressAutocomplete
          name="depart"
          label="Adresse de départ"
          placeholder="Adresse de départ"
          onChange={handleAddressChange}
          error={errors?.depart}
        >
          <IoLocationSharp className="text-gold mx-1 text-2xl" />
        </AddressAutocomplete>

        <AddressAutocomplete
          name="arrive"
          label="Adresse d'arrivée"
          placeholder="Adresse d'arrivée"
          onChange={handleAddressChange}
          error={errors?.arrive}
        >
          <IoLocationSharp className="text-red-400 mx-1 text-2xl" />
        </AddressAutocomplete>

        <VehicleTypeCards value={vehicleTypeKey} onChange={onVehicleChange} error={errors?.typeCar} />

        {route.error && <p className="text-red-400 text-sm">{route.error}</p>}

        {route.distanceKm != null && (
          <div className="bg-surface border border-border-gold rounded-xl p-4 flex flex-col gap-1">
            <p className="font-body text-offwhite/70 text-sm">
              Distance : <span className="text-gold font-semibold">{Math.round(route.distanceKm)} km</span>
              {" — "}Durée estimée :{" "}
              <span className="text-gold font-semibold">
                {Math.floor(route.durationMin / 60)}h{String(route.durationMin % 60).padStart(2, "0")}
              </span>
            </p>
            {pricing.total != null && pricing.range.min != null && (
              <p className="font-numeric text-gold text-2xl">
                Estimation : entre {animatedMin}€ et {animatedMax}€
              </p>
            )}
          </div>
        )}

        <button
          type="button"
          disabled={!canContinue}
          onClick={onNext}
          className="mt-auto bg-gold disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-gold-light transition-colors"
        >
          Continuer avec cette estimation →
        </button>
      </div>
    </div>
  );
}
