const BG = {
  orange: "bg-retro-orange",
  cyan:   "bg-retro-cyan",
  purple: "bg-retro-purple",
  red:    "bg-retro-red",
  green:  "bg-retro-green",
  blue:   "bg-retro-blue",
  yellow: "bg-retro-yellow",
};

function ConnectionLabel({ label, colorKey }) {
  return (
    <div className={`${BG[colorKey]} rounded-sm px-2 py-1`}>
      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-retro-bg">
        {label}
      </span>
    </div>
  );
}

export default ConnectionLabel;
