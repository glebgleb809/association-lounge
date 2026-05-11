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
        </div>
      </section>
    </div>
  );
}

