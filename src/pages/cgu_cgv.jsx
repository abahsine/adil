import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      
      {/* TITRE PRINCIPAL */}
      <h1 className="text-4xl font-bold mb-8 text-marine border-b-4 border-amber pb-2">
        Conditions Générales d’Utilisation et de Vente
      </h1>

      {/* CGU */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-marine mb-4">
          1. Conditions Générales d’Utilisation (CGU)
        </h2>

        <p className="mb-4">
          L'accès au site <span className="font-semibold text-marine">Prestige Auto</span> 
          implique l’acceptation sans réserve des présentes Conditions Générales 
          d’Utilisation. L’utilisateur s’engage à utiliser le site conformément 
          aux lois et réglementations en vigueur.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          1.1. Objet du site
        </h3>
        <p className="mb-4">
          Le site permet de consulter nos services, d’obtenir des informations 
          et d’effectuer des demandes de convoyage via un formulaire sécurisé.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          1.2. Accès au site
        </h3>
        <p className="mb-4">
          L’accès au site est gratuit. Prestige Auto peut modifier ou interrompre 
          l’accès au site sans préavis, notamment pour maintenance ou mise à jour.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          1.3. Responsabilités de l’utilisateur
        </h3>
        <p className="mb-4">
          Toute utilisation frauduleuse, tentative d’extraction de données, ou 
          usage abusif du site est strictement interdite. L’utilisateur est seul 
          responsable de son comportement lors de l’utilisation du service.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          1.4. Données personnelles
        </h3>
        <p className="mb-4">
          Les données transmises via le formulaire sont utilisées uniquement pour 
          traiter les demandes de convoyage. Conformément au RGPD, tout utilisateur 
          peut demander la suppression ou la rectification de ses données.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          1.5. Propriété intellectuelle
        </h3>
        <p className="mb-4">
          Le contenu du site (textes, images, logo, mise en page) est protégé. 
          Toute reproduction est interdite sans autorisation préalable.
        </p>
      </section>

      {/* CGV */}
      <section>
        <h2 className="text-2xl font-semibold text-marine mb-4">
          2. Conditions Générales de Vente (CGV)
        </h2>

        <p className="mb-4">
          Les prestations de convoyage proposées par 
          <span className="font-semibold text-marine"> Prestige Auto</span> 
          sont soumises aux présentes Conditions Générales de Vente. 
          Toute réservation vaut acceptation des conditions ci-dessous.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.1. Description des services
        </h3>
        <p className="mb-4">
          Prestige Auto assure le convoyage de tous types de véhicules 
          (voitures personnelles, utilitaires légers, véhicules neufs ou d’occasion).
          Le transport est effectué par des convoyeurs qualifiés.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.2. Tarifs et devis
        </h3>
        <p className="mb-4">
          Les tarifs sont communiqués lors du premier contact et peuvent varier 
          selon la distance, l’état du véhicule, le lieu de prise en charge et 
          les conditions particulières du transport.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.3. Modalités de paiement
        </h3>
        <p className="mb-4">
          Le paiement doit être effectué selon les modalités convenues lors de 
          la validation du service. Aucune prestation ne sera validée sans accord 
          ferme du client.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.4. Obligations du client
        </h3>
        <p className="mb-4">
          Le client doit fournir des informations exactes concernant le véhicule : 
          état, documents, fonctionnement, instructions spécifiques. Prestige Auto ne 
          peut être tenu responsable en cas de données erronées ou incomplètes.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.5. Assurance et responsabilité
        </h3>
        <p className="mb-4">
          Les convoyeurs sont assurés pour la conduite du véhicule. Prestige Auto 
          n’est pas responsable des dommages antérieurs non signalés ou des pannes 
          mécaniques indépendantes de la prestation.
        </p>

        <h3 className="text-xl font-semibold text-amber mt-6 mb-2">
          2.6. Annulation
        </h3>
        <p className="mb-4">
          Toute annulation doit être faite au plus tôt. Des frais peuvent être 
          appliqués si l’annulation intervient moins de 24h avant le départ prévu.
        </p>

        <p className="text-gray-600 italic mt-8">
          Pour toute question concernant ces conditions, vous pouvez nous contacter 
          via le formulaire ou par les informations disponibles dans le pied de page.
        </p>
      </section>
    </div>
  );
}
