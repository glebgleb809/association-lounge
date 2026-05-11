import Image from "next/image";

export default function VipPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
              VIP
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">VIP-комната</h1>
            <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
              Стол для настольных игр и приватный формат.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 md:items-stretch">
              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-brand">
                  VIP-комната со столом для настольных игр
                </h2>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-brand">
                    Игровая VIP комната
                  </h3>
                  <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside marker:text-brand">
                    <li>Профессиональный стол с суконным покрытием</li>
                    <li>Качественная и удобная мебель</li>
                    <li>Smart TV</li>
                    <li>Премиальные игровые наборы</li>
                    <li>Приватность и комфорт</li>
                  </ul>
                </div>
              </div>

              <div className="flex w-full items-center justify-center bg-zinc-900 md:h-full md:self-stretch">
                <Image
                  src="/vip-room.png"
                  alt="VIP-комната"
                  width={1200}
                  height={900}
                  className="h-auto w-full max-w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
