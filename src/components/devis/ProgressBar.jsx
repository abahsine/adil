export default function ProgressBar({ step, totalSteps = 3 }) {
  const pct = (step / totalSteps) * 100;
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between text-xs font-body text-offwhite/60 mb-1">
        <span>Étape {step}/{totalSteps}</span>
      </div>
      <div className="h-1.5 w-full bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-gold transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
