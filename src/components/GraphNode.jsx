const BORDER = {
  orange: "border-retro-orange",
  cyan: "border-retro-cyan",
  purple: "border-retro-purple",
  red: "border-retro-red",
  green: "border-retro-green",
  blue: "border-retro-blue",
  yellow: "border-retro-yellow",
};

function GraphNode({ title, attributes, accentColor }) {
  const border = (accentColor && BORDER[accentColor]) || "border-retro-fg";

  return (
    <div
      className={`w-44 rounded-md border-2 ${border} bg-retro-bg overflow-hidden`}
    >
      <div
        className={`border-b-2 ${border} bg-retro-fg px-3 py-2 text-center`}
      >
        <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-retro-bg">
          {title}
        </h3>
      </div>
      <div className="flex flex-col">
        {attributes.map((attr, i) => (
          <div
            key={i}
            className={`px-3 py-2 font-mono text-[10px] text-retro-fg ${
              i < attributes.length - 1 ? `border-b ${border}` : ""
            }`}
          >
            {attr}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GraphNode;
