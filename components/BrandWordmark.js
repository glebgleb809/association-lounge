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
  return (
    <span
      className={`inline-flex flex-wrap items-baseline gap-x-2 ${className}`}
    >
      <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand sm:text-base">
        Ассоциация
      </span>
      <span className="font-sans text-xs font-light uppercase tracking-[0.28em] text-white sm:text-sm">
        Lounge
      </span>
    </span>
  );
}
