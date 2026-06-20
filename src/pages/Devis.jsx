import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProgressBar from "../components/devis/ProgressBar";
import StepOneRoute from "../components/devis/StepOneRoute";
import StepTwoOptions from "../components/devis/StepTwoOptions";
import StepThreeContact from "../components/devis/StepThreeContact";
import RecapCard from "../components/devis/RecapCard";
import SuccessScreen from "../components/devis/SuccessScreen";
import sendEmail from "../components/utils/EmailJs";
import { computeQuote, DEFAULT_VEHICLE_KEY, COMPANY_ADDRESS } from "../lib/pricing";
import useRouteDistance from "../hooks/useRouteDistance";

const initialReturnRoute = {
  depart: "",
  arrive: "",
  distanceKm: null,
  durationMin: null,
  error: "",
  departTouched: false,
  arriveTouched: false,
};

const initialState = {
  step: 1,
  route: { depart: "", arrive: "", distanceKm: null, durationMin: null, error: "" },
  restitution: false,
  returnRoute: initialReturnRoute,
  vehicleTypeKey: "",
  pricing: { base: null, positioningCost: 0, optionsTotal: 0, total: null, range: { min: null, max: null }, usingDefaultVehicle: false },
  schedule: { date: "", timeSlot: "" },
  options: { etatDesLieuxPhoto: false, livraisonExpress: false, assurancePremium: false, nettoyage: false },
  contact: { prenom: "", nom: "", mail: "", telephone: "", message: "", cgvAccepted: false },
};

export default function Devis() {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [step2Errors, setStep2Errors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  // Déplacement du convoyeur en train : siège -> ville de départ (trajet 1), et ville d'arrivée
  // (dernier trajet) -> siège. En cas de restitution, on ne compte que ces deux extrémités,
  // jamais les villes intermédiaires entre l'aller et le retour.
  const [positioning, setPositioning] = useState({ outboundKm: null, returnKm: null });
  const lastArriveAddress = state.restitution ? state.returnRoute.arrive : state.route.arrive;

  useRouteDistance(COMPANY_ADDRESS, state.route.depart, (result) => {
    setPositioning((p) => ({ ...p, outboundKm: result.error ? null : result.distanceKm }));
  });

  useRouteDistance(lastArriveAddress, COMPANY_ADDRESS, (result) => {
    setPositioning((p) => ({ ...p, returnKm: result.error ? null : result.distanceKm }));
  });

  const updateSection = (section, partial) =>
    setState((s) => ({ ...s, [section]: { ...s[section], ...partial } }));

  const updateReturnRoute = (partial) => {
    const touched = {};
    if ("depart" in partial) touched.departTouched = true;
    if ("arrive" in partial) touched.arriveTouched = true;
    updateSection("returnRoute", { ...partial, ...touched });
  };

  const toggleRestitution = () => {
    setState((s) => {
      if (s.restitution) {
        return { ...s, restitution: false, returnRoute: initialReturnRoute };
      }
      return {
        ...s,
        restitution: true,
        returnRoute: { ...initialReturnRoute, depart: s.route.arrive, arrive: s.route.depart },
      };
    });
  };

  // Tant que l'utilisateur n'a pas modifié manuellement les champs du trajet retour,
  // on les garde synchronisés avec les adresses (inversées) du trajet aller.
  useEffect(() => {
    if (!state.restitution) return;
    setState((s) => {
      const updates = {};
      if (!s.returnRoute.departTouched && s.returnRoute.depart !== s.route.arrive) {
        updates.depart = s.route.arrive;
      }
      if (!s.returnRoute.arriveTouched && s.returnRoute.arrive !== s.route.depart) {
        updates.arrive = s.route.depart;
      }
      if (Object.keys(updates).length === 0) return s;
      return { ...s, returnRoute: { ...s.returnRoute, ...updates } };
    });
  }, [state.route.depart, state.route.arrive, state.restitution]);

  // Recompute pricing whenever route distance(s), vehicle type, or options change
  useEffect(() => {
    const selectedOptionKeys = Object.entries(state.options)
      .filter(([, v]) => v)
      .map(([k]) => k);

    let distanceKm = null;
    if (state.restitution) {
      if (state.route.distanceKm != null && state.returnRoute.distanceKm != null) {
        distanceKm = state.route.distanceKm + state.returnRoute.distanceKm;
      }
    } else {
      distanceKm = state.route.distanceKm;
    }

    // En mode restitution, le véhicule n'est pas obligatoire pour déclencher le calcul :
    // on applique le tarif de base (citadine) tant qu'aucun véhicule n'a été choisi.
    const usingDefaultVehicle = state.restitution && !state.vehicleTypeKey;
    const effectiveVehicleTypeKey = state.vehicleTypeKey || (state.restitution ? DEFAULT_VEHICLE_KEY : state.vehicleTypeKey);
    const positioningKm = (positioning.outboundKm ?? 0) + (positioning.returnKm ?? 0);

    const quote = computeQuote({
      vehicleTypeKey: effectiveVehicleTypeKey,
      distanceKm,
      positioningKm,
      selectedOptionKeys,
    });
    setState((s) => ({ ...s, pricing: { ...quote, usingDefaultVehicle } }));
  }, [
    state.route.distanceKm,
    state.returnRoute.distanceKm,
    state.restitution,
    state.vehicleTypeKey,
    state.options,
    positioning.outboundKm,
    positioning.returnKm,
  ]);

  const goNext = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const goBack = () => setState((s) => ({ ...s, step: Math.max(1, s.step - 1) }));

  const handleStepTwoNext = () => {
    const errors = {};
    if (!state.schedule.date) errors.date = "Date obligatoire.";
    if (!state.schedule.timeSlot) errors.timeSlot = "Créneau obligatoire.";
    if (Object.keys(errors).length > 0) {
      setStep2Errors(errors);
      return;
    }
    setStep2Errors({});
    goNext();
  };

  const handleContactSubmit = async (contactValues) => {
    updateSection("contact", contactValues);
    setSubmitting(true);
    setShowSuccess(true);
    try {
      await sendEmail({
        depart: state.route.depart,
        arrive: state.route.arrive,
        distanceKm: state.route.distanceKm,
        durationMin: state.route.durationMin,
        restitution: state.restitution,
        returnDepart: state.restitution ? state.returnRoute.depart : "",
        returnArrive: state.restitution ? state.returnRoute.arrive : "",
        returnDistanceKm: state.restitution ? state.returnRoute.distanceKm : null,
        typeCar: state.vehicleTypeKey,
        date: state.schedule.date,
        timeSlot: state.schedule.timeSlot,
        options: Object.entries(state.options).filter(([, v]) => v).map(([k]) => k).join(", "),
        basePrice: state.pricing.base,
        positioningCost: state.pricing.positioningCost,
        optionsTotal: state.pricing.optionsTotal,
        totalPrice: state.pricing.total,
        ...contactValues,
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setState(initialState);
    navigate("/");
  };

  const slideVariants = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="min-h-screen bg-bg bg-[url('/assets/contact/backContact.webp')] bg-cover bg-center bg-fixed pt-28 pb-16">
      <ProgressBar step={state.step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={state.step}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35 }}
        >
          {state.step === 1 && (
            <StepOneRoute
              route={state.route}
              restitution={state.restitution}
              returnRoute={state.returnRoute}
              vehicleTypeKey={state.vehicleTypeKey}
              pricing={state.pricing}
              onRouteChange={(partial) => updateSection("route", partial)}
              onReturnRouteChange={updateReturnRoute}
              onToggleRestitution={toggleRestitution}
              onVehicleChange={(key) => setState((s) => ({ ...s, vehicleTypeKey: key }))}
              onNext={goNext}
            />
          )}

          {state.step === 2 && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-3xl mx-auto px-4">
              <div className="flex-1">
                <StepTwoOptions
                  schedule={state.schedule}
                  options={state.options}
                  onScheduleChange={(partial) => updateSection("schedule", partial)}
                  onOptionsChange={(partial) => updateSection("options", partial)}
                  onNext={handleStepTwoNext}
                  onBack={goBack}
                  errors={step2Errors}
                />
              </div>
              <div className="lg:w-72">
                <RecapCard
                  route={state.route}
                  restitution={state.restitution}
                  returnRoute={state.returnRoute}
                  vehicleTypeKey={state.vehicleTypeKey}
                  pricing={state.pricing}
                />
              </div>
            </div>
          )}

          {state.step === 3 && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-3xl mx-auto px-4">
              <div className="flex-1">
                <StepThreeContact contact={state.contact} onSubmitContact={handleContactSubmit} onBack={goBack} />
              </div>
              <div className="lg:w-72">
                <RecapCard
                  route={state.route}
                  restitution={state.restitution}
                  returnRoute={state.returnRoute}
                  vehicleTypeKey={state.vehicleTypeKey}
                  pricing={state.pricing}
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {showSuccess && <SuccessScreen loading={submitting} onClose={handleCloseSuccess} />}
    </div>
  );
}
