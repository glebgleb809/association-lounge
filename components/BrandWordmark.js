export function BrandWordmarkHero() {
  return (
    <h1 className="mb-8 text-center leading-tight">
      <span className="font-display block text-4xl font-semibold uppercase tracking-[0.14em] text-brand sm:text-5xl md:text-6xl lg:text-7xl">
        Ассоциация
      </span>
      <span className="font-sans mt-3 block text-xl font-light uppercase tracking-[0.38em] text-white sm:text-2xl md:text-3xl">
        Lounge
      </span>
    </h1>
  );
}

export function BrandWordmarkNav({ className = "" }) {
  const tokenClass =
    "font-sans text-xs font-light uppercase tracking-[0.2em] text-white sm:text-sm";
  return (
    <span
      className={`inline-flex flex-nowrap items-center gap-x-2 whitespace-nowrap ${className}`}
    >
      <span className={tokenClass}>Ассоциация</span>
      <span className={tokenClass}>Lounge</span>
    </span>
  );
}
