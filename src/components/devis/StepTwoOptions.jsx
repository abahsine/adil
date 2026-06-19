import { OPTION_PRICING } from "../../lib/pricing";

const TIME_SLOTS = [
  { key: "matin", label: "Matin" },
  { key: "apres-midi", label: "Après-midi" },
  { key: "soir", label: "Soir" },
];

export default function StepTwoOptions({ schedule, options, onScheduleChange, onOptionsChange, onNext, onBack, errors }) {
  const toggleOption = (key) => onOptionsChange({ [key]: !options[key] });

  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto px-4">
      <div>
        <label className="block text-sm font-medium text-offwhite/80 mb-1">Date souhaitée de prise en charge</label>
        <input
          type="date"
          value={schedule.date}
          onChange={(e) => onScheduleChange({ date: e.target.value })}
          className="w-full bg-surface border border-border-gold rounded-md px-3 py-2.5 text-offwhite outline-none"
        />
        {errors?.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
      </div>

      <div>
        <p className="text-sm font-medium text-offwhite/80 mb-2">Créneau horaire préféré</p>
        <div className="grid grid-cols-3 gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              type="button"
              key={slot.key}
              onClick={() => onScheduleChange({ timeSlot: slot.key })}
              className={`py-2.5 rounded-xl border text-sm font-body cursor-pointer transition-colors ${
                schedule.timeSlot === slot.key
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-border-gold text-offwhite/70 hover:border-border-gold-strong"
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
        {errors?.timeSlot && <p className="text-red-400 text-sm mt-1">{errors.timeSlot}</p>}
      </div>

      <div>
        <p className="text-sm font-medium text-offwhite/80 mb-2">Options supplémentaires</p>
        <div className="flex flex-col gap-2">
          {Object.entries(OPTION_PRICING).map(([key, opt]) => (
            <label key={key} className="flex items-center gap-3 bg-surface border border-border-gold rounded-xl px-3 py-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={!!options[key]}
                onChange={() => toggleOption(key)}
                className="w-4 h-4 accent-[#C9A84C]"
              />
              <span className="text-offwhite/80 text-sm flex-1">{opt.label}</span>
              <span className="text-gold text-sm font-semibold">
                {opt.amount === 0 ? "Offert" : opt.type === "flat" ? `+${opt.amount}€` : `+${opt.amount * 100}%`}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <button type="button" onClick={onBack} className="flex-1 border border-border-gold text-offwhite/80 py-3 rounded-xl cursor-pointer hover:border-border-gold-strong">
          ← Retour
        </button>
        <button type="button" onClick={onNext} className="flex-1 bg-gold text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-gold-light">
          Finaliser ma demande →
        </button>
      </div>
    </div>
  );
}
