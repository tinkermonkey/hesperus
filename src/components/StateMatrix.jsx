// State matrix component that shows all interaction states for a component
export function StateMatrix({ label, children, includeLoading = false }) {
  const states = ["default", "hover", "active", "focus", "disabled"];
  if (includeLoading) states.push("loading");

  return (
    <div className="mb-8">
      {label && (
        <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3 border-l-2 border-retro-border pl-2">
          {label}
        </p>
      )}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${states.length}, minmax(0, 1fr))`, maxWidth: "900px" }}>
        {states.map((state) => (
          <div key={state} className="flex flex-col items-center gap-2">
            <div className={`state-${state} w-full flex justify-center`} data-state={state}>
              {children}
            </div>
            <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg text-center">
              {state === "focus" ? ":focus-visible" : state === "default" ? "default" : `:${state}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
