import {
  FaCar, FaCarSide, FaGaugeHigh, FaVanShuttle, FaTruckPickup, FaBolt,
  FaTruck, FaTruckMoving, FaTruckRampBox, FaCaravan, FaArrowUpLong,
} from "react-icons/fa6";
import vehicleTypes from "../contact/vehiculeTypes";

const ICONS = {
  Citadine: FaCar,
  berline: FaCarSide,
  sportive_250ch: FaGaugeHigh,
  Monospace: FaVanShuttle,
  "4x4/Suv": FaTruckPickup,
  electrique: FaBolt,
  utilitaire_3_9: FaTruck,
  utilitaire_10_19: FaTruckMoving,
  utilitaire_20_plus: FaTruckRampBox,
  Caravane: FaCaravan,
  Nacelle: FaArrowUpLong,
};

export default function VehicleTypeCards({ value, onChange, error }) {
  const types = vehicleTypes();

  return (
    <div>
      <p className="text-sm font-medium text-offwhite/80 mb-2">Type de véhicule</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {types.map((t) => {
          const Icon = ICONS[t.value] || FaCar;
          const selected = value === t.value;
          return (
            <button
              type="button"
              key={t.value}
              onClick={() => onChange(t.value)}
              className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                selected
                  ? "border-gold bg-gold/10 text-gold shadow-[0_0_12px_rgba(201,168,76,0.25)]"
                  : "border-border-gold text-offwhite/70 hover:border-border-gold-strong"
              }`}
            >
              <Icon className="text-2xl" />
              <span className="text-xs font-body leading-tight">{t.label}</span>
            </button>
          );
        })}
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
