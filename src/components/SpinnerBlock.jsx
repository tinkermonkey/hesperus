const SIZE = { xs: 12, sm: 16, md: 24, lg: 32, xl: 40 };

export default function SpinnerBlock({ size = "md" }) {
  const px = SIZE[size] ?? SIZE.md;
  return (
    <div
      className="relative overflow-hidden border-2 border-retro-fg bg-retro-bg shrink-0"
      style={{ width: px, height: px }}
    >
      <div
        className="absolute left-0 top-0 h-full w-1/2 bg-retro-fg animate-spin-block"
      />
    </div>
  );
}
