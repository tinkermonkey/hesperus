export default function SpinnerDots() {
  return (
    <div className="inline-flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-sm bg-retro-fg animate-spin-dot" />
      <div className="w-1.5 h-1.5 rounded-sm bg-retro-fg animate-spin-dot" style={{ animationDelay: "0.16s" }} />
      <div className="w-1.5 h-1.5 rounded-sm bg-retro-fg animate-spin-dot" style={{ animationDelay: "0.32s" }} />
    </div>
  );
}
