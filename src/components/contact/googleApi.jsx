import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

export default function AddressAutocomplete({
  label = "Adresse de départ",
  placeholder = "Adresse de départ",
  name,
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
      <label htmlFor={name} className="block mb-1 text-md font-medium text-gray-700">
        {label}
      </label>

      {/* INPUT + ICON */}
    <div className="border border-[#ccc] flex items-center gap-3 py-2 px-2 rounded-md bg-white relative">
  {children}

  {/* INPUT QUI PREND TOUT L'ESPACE */}
  <div className="flex-1 relative">
    <input
      name={name}
      className="w-full  text-gray-900 placeholder-gray-400 outline-none bg-transparent
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
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    )}
  </div>
</div>


      {/* LISTE DES SUGGESTIONS */}
      {status === "OK" && (
        <ul className="mt-1 bg-white border rounded-md shadow-md overflow-hidden z-50 absolute w-full">
          {data.map(({ place_id, description }) => (
            <li
              key={place_id}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer
                         hover:bg-gray-100 transition-colors border-b last:border-none"
              onClick={() => handleSelect(description)}
            >
              <div className="text-gray-500">{children}</div>
              <span className="text-gray-700">{description}</span>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
