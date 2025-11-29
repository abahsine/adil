import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Conditions Générales</h1>

      {/* CGU */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conditions Générales d'Utilisation (CGU)</h2>
        <p className="text-gray-600 mb-2">
          L'utilisation du site Prestige Auto implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. 
          Tout utilisateur s'engage à respecter les lois et règlements en vigueur lors de l'accès au site.
        </p>
        <p className="text-gray-600 mb-2">
          Les utilisateurs sont responsables de l'utilisation qu'ils font des informations et services proposés sur ce site.
        </p>
        <p className="text-gray-600 mb-2">
          Prestige Auto se réserve le droit de modifier, suspendre ou interrompre le site à tout moment sans préavis.
        </p>
      </section>

      {/* CGV */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conditions Générales de Vente (CGV)</h2>
        <p className="text-gray-600 mb-2">
          Les services de convoyage de Prestige Auto sont proposés conformément aux présentes conditions générales de vente. 
          Toute commande ou demande de transport implique l'acceptation de ces conditions.
        </p>
        <p className="text-gray-600 mb-2">
          Les tarifs et modalités de paiement sont précisés lors de la prise de contact. Les véhicules sont pris en charge selon les informations fournies par le client.
        </p>
        <p className="text-gray-600 mb-2">
          Prestige Auto s'engage à assurer un transport sûr et conforme, mais décline toute responsabilité en cas de non-respect des informations fournies par le client.
        </p>
      </section>
    </div>
  );
}
