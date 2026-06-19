import { useForm } from "react-hook-form";

export default function StepThreeContact({ contact, onSubmitContact, onBack }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: contact });

  const onSubmit = (values) => onSubmitContact(values);

  const fieldClass = "w-full bg-surface border border-border-gold rounded-md px-3 py-2.5 text-offwhite placeholder-offwhite/40 outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md mx-auto px-4">
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium text-offwhite/80 mb-1">Prénom</label>
          <input className={fieldClass} placeholder="Prénom" {...register("prenom", { required: "Prénom obligatoire." })} />
          {errors.prenom && <p className="text-red-400 text-sm mt-1">{errors.prenom.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-offwhite/80 mb-1">Nom</label>
          <input className={fieldClass} placeholder="Nom" {...register("nom", { required: "Nom obligatoire." })} />
          {errors.nom && <p className="text-red-400 text-sm mt-1">{errors.nom.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-offwhite/80 mb-1">Adresse mail</label>
        <input
          type="email"
          className={fieldClass}
          placeholder="Adresse mail"
          {...register("mail", {
            required: "L'email est obligatoire.",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Adresse email invalide." },
          })}
        />
        {errors.mail && <p className="text-red-400 text-sm mt-1">{errors.mail.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-offwhite/80 mb-1">Téléphone (optionnel)</label>
        <input type="tel" className={fieldClass} placeholder="Numéro de téléphone" {...register("telephone")} />
      </div>

      <div>
        <label className="block text-sm font-medium text-offwhite/80 mb-1">Message / précisions (optionnel)</label>
        <textarea rows={3} className={fieldClass} placeholder="Précisions supplémentaires" {...register("message")} />
      </div>

      <label className="flex items-center gap-2 text-sm text-offwhite/70">
        <input type="checkbox" className="w-4 h-4 accent-[#C9A84C]" {...register("cgvAccepted", { required: "Vous devez accepter les CGV." })} />
        J'accepte les conditions générales de vente
      </label>
      {errors.cgvAccepted && <p className="text-red-400 text-sm">{errors.cgvAccepted.message}</p>}

      <div className="flex gap-3 mt-2">
        <button type="button" onClick={onBack} className="flex-1 border border-border-gold text-offwhite/80 py-3 rounded-xl cursor-pointer hover:border-border-gold-strong">
          ← Retour
        </button>
        <button type="submit" className="flex-1 bg-gold text-black font-bold py-3 rounded-xl cursor-pointer hover:bg-gold-light">
          Envoyer ma demande
        </button>
      </div>
    </form>
  );
}
