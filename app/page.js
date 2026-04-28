export default function Home() {
  const events = [
    "Стендап",
    "Рейтинговые турниры",
    "Вечер кино",
    "Футбольные трансляции",
  ];

  const menuSections = [
    {
      title: "Горячее",
      items: ["Блюдо 1", "Блюдо 2", "Блюдо 3", "Блюдо 4"],
    },
    {
      title: "Закуски",
      items: ["Блюдо 1", "Блюдо 2", "Блюдо 3", "Блюдо 4"],
    },
    {
      title: "Алкогольные напитки",
      items: ["Блюдо 1", "Блюдо 2", "Блюдо 3", "Блюдо 4"],
    },
    {
      title: "Безалкогольные напитки",
      items: ["Блюдо 1", "Блюдо 2", "Блюдо 3", "Блюдо 4"],
    },
    {
      title: "Пицца",
      items: ["Блюдо 1", "Блюдо 2", "Блюдо 3", "Блюдо 4"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full text-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Premium Lounge
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Association Lounge
          </h1>

          <button className="bg-amber-400 text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300">
            Забронировать столик
          </button>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">Контакты</h3>

              <p className="text-zinc-400 mb-2">
                📍 Москва
              </p>

              <p className="text-zinc-400 mb-2">
                📞 +7 (999) 999-99-99
              </p>

              <a
                href="#"
                className="text-amber-400"
              >
                Instagram
              </a>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">Акции</h3>

              <ul className="space-y-4 text-zinc-400">
                <li>🎉 Скидка в день рождения 10%</li>

                <li>
                  💨 До 17:00 кальян 1700₽ вместо 2300₽
                </li>

                <li>
                  ⭐ Бонусная система
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">
                Карта
              </h3>

              <div className="h-48 bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500">
                Карта
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Events
            </p>

            <h2 className="text-5xl font-bold">
              Мероприятия
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl p-10 min-h-[300px] flex items-end hover:bg-zinc-800 transition-all duration-300"
              >
                <div>
                  <p className="text-zinc-500 mb-3">
                    Event 0{index + 1}
                  </p>

                  <h3 className="text-3xl font-semibold">
                    {event}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Menu
            </p>

            <h2 className="text-5xl font-bold">
              Меню
            </h2>
          </div>

          <div className="space-y-20">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-3xl font-semibold mb-8">
                  {section.title}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-zinc-900 rounded-3xl overflow-hidden"
                    >
                      <div className="h-52 bg-zinc-800 flex items-center justify-center text-zinc-500">
                        Фото
                      </div>

                      <div className="p-5">
                        <h4 className="text-xl font-medium mb-2">
                          {item}
                        </h4>

                        <p className="text-zinc-500 text-sm mb-4">
                          Описание позиции
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-amber-400">
                            000 ₽
                          </span>

                          <button className="border border-zinc-700 px-4 py-2 rounded-full hover:border-amber-400 transition-all duration-300">
                            Подробнее
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}