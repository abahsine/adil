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
import { computeQuote } from "../lib/pricing";

const initialState = {
  step: 1,
  route: { depart: "", arrive: "", distanceKm: null, durationMin: null, error: "" },
  vehicleTypeKey: "",
  pricing: { base: null, optionsTotal: 0, total: null, range: { min: null, max: null } },
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

  const updateSection = (section, partial) =>
    setState((s) => ({ ...s, [section]: { ...s[section], ...partial } }));

  // Recompute pricing whenever route distance, vehicle type, or options change
  useEffect(() => {
    const selectedOptionKeys = Object.entries(state.options)
      .filter(([, v]) => v)
      .map(([k]) => k);

    const quote = computeQuote({
      vehicleTypeKey: state.vehicleTypeKey,
      distanceKm: state.route.distanceKm,
      selectedOptionKeys,
    });
    setState((s) => ({ ...s, pricing: quote }));
  }, [state.route.distanceKm, state.vehicleTypeKey, state.options]);

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
        typeCar: state.vehicleTypeKey,
        date: state.schedule.date,
        timeSlot: state.schedule.timeSlot,
        options: Object.entries(state.options).filter(([, v]) => v).map(([k]) => k).join(", "),
        basePrice: state.pricing.base,
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
    <div className="min-h-screen bg-bg pt-28 pb-16">
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
              vehicleTypeKey={state.vehicleTypeKey}
              pricing={state.pricing}
              onRouteChange={(partial) => updateSection("route", partial)}
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
                <RecapCard route={state.route} vehicleTypeKey={state.vehicleTypeKey} pricing={state.pricing} />
              </div>
            </div>
          )}

          {state.step === 3 && (
            <div className="flex flex-col lg:flex-row gap-6 w-full max-w-3xl mx-auto px-4">
              <div className="flex-1">
                <StepThreeContact contact={state.contact} onSubmitContact={handleContactSubmit} onBack={goBack} />
              </div>
              <div className="lg:w-72">
                <RecapCard route={state.route} vehicleTypeKey={state.vehicleTypeKey} pricing={state.pricing} />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {showSuccess && <SuccessScreen loading={submitting} onClose={handleCloseSuccess} />}
    </div>
  );
}
