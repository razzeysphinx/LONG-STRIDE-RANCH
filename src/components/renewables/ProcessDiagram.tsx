const steps = [
  {
    index: "01",
    title: "Stable waste",
    copy: "Equine manure and used bedding enter the waste stream.",
  },
  {
    index: "02",
    title: "Preparation",
    copy: "Material is prepared for processing.",
  },
  {
    index: "03",
    title: "Pyrolysis",
    copy: "Thermal processing converts organic material into useful outputs.",
  },
  {
    index: "04",
    title: "Outputs",
    copy: "Outputs may include BioChar and renewable fuel products.",
  },
];

export function ProcessDiagram() {
  return (
    <div className="border-t border-[var(--ls-line)]">
      {steps.map((step) => (
        <div
          key={step.index}
          className="grid gap-4 border-b border-[var(--ls-line)] py-8 md:grid-cols-[90px_280px_1fr] md:items-baseline md:py-10"
        >
          <span className="font-display text-xl text-[var(--ls-brass)]">
            {step.index}
          </span>
          <h3 className="font-display text-3xl md:text-4xl">{step.title}</h3>
          <p className="max-w-xl text-[15px] leading-7 text-[var(--ls-muted)]">
            {step.copy}
          </p>
        </div>
      ))}
    </div>
  );
}
