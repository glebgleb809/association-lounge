import Image from "next/image";

export default function EventsPage() {
  const events = [
    "Стендап",
    "Рейтинговые турниры по покеру",
    "Вечер кино",
    "Футбольные трансляции",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Events
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">Мероприятия</h1>
            <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
              Афиша и форматы событий в нашем лаунже.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event}
                className="bg-zinc-900 rounded-3xl p-10 min-h-[300px] flex items-end hover:bg-zinc-800 transition-all duration-300"
              >
                <div>
                  <h2 className="text-3xl font-semibold">{event}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-zinc-900 rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                  VIP-комната со столом для настольных игр
                </h2>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    Игровая VIP комната
                  </h3>
                  <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside marker:text-orange-500">
                    <li>Профессиональный стол с суконным покрытием</li>
                    <li>Качественная и удобная мебель</li>
                    <li>Smart TV</li>
                    <li>Премиальные игровые наборы</li>
                    <li>Приватность и комфорт</li>
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-800">
                <Image
                  src="/vip-room.png"
                  alt="VIP-комната"
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
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

