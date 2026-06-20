import React, { useEffect } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

export default function AddressAutocomplete({
  label = "Adresse de départ",
  placeholder = "Adresse de départ",
  name,
  value: externalValue, // <- permet un pré-remplissage contrôlé depuis le parent (ex: trajet retour)
  onChange,        // <- handleChange vient de Contact
  children,
  error
}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  // Reflète une valeur fixée par le parent (ex: pré-remplissage auto du trajet retour)
  // sans écraser ce que l'utilisateur est en train de taper lui-même.
  useEffect(() => {
    if (externalValue !== undefined && externalValue !== value) {
      setValue(externalValue, false);
    }
  }, [externalValue]);

  // -------------------------------
  // À chaque frappe de l’utilisateur
  // -------------------------------
  const handleInputChange = (e) => {
    const newValue = e.target.value;

    // Mettre à jour l'autocomplete interne
    setValue(newValue);
    
    // ENVOYER AU PARENT
    onChange({
      target: {
        name,
        value: newValue,
      },
    });
  };

  // -------------------------------
  // Quand il clique une suggestion
  // -------------------------------
  const handleSelect = (address) => {
    setValue(address, false);
    clearSuggestions();

    // ENVOYER AU PARENT
    onChange({
      target: {
        name,
        value: address,
      },
    });
  };

  return (
    <div className="relative w-full">
      <label htmlFor={name} className="block mb-1 text-md font-medium text-offwhite/80">
        {label}
      </label>

      {/* INPUT + ICON */}
    <div className="border border-border-gold flex items-center gap-3 py-2 px-2 rounded-md bg-surface relative">
  {children}

  {/* INPUT QUI PREND TOUT L'ESPACE */}
  <div className="flex-1 relative">
    <input
      name={name}
      className="w-full  text-offwhite placeholder-offwhite/40 outline-none bg-transparent
                 focus:outline-none focus:ring-0 text-sm pr-8" // pr-8 pour le bouton X
      value={value}
      onChange={handleInputChange}
      disabled={!ready}
      placeholder={placeholder}
    />

    {/* BOUTON CLEAR */}
    {value && (
      <button
        type="button"
        onClick={() => {
          // vide le champ
          setValue("");
          clearSuggestions();

          // envoie l'event au parent
          onChange({
            target: {
              name,
              value: "",
            },
          });
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-offwhite/40 hover:text-offwhite"
      >
        ✕
      </button>
    )}
  </div>
</div>


      {/* LISTE DES SUGGESTIONS */}
      {status === "OK" && (
        <ul className="mt-1 bg-surface border border-border-gold rounded-md shadow-md overflow-hidden z-50 absolute w-full">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer
                         hover:bg-white/5 transition-colors border-b border-border-gold last:border-none"
              onClick={() => handleSelect(description)}
            >
              <div className="text-offwhite/50">{children}</div>
              <span className="text-offwhite/80">{description}</span>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
