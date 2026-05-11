export default function Home() {
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
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Ассоциация Lounge
          </h1>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button className="bg-orange-500 text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300">
              Забронировать столик
            </button>
            <a
              href="/events"
              className="border border-white/15 px-10 py-4 rounded-full text-lg font-medium hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
            >
              Мероприятия
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-20">
            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">Контакты</h3>

              <p className="text-zinc-400 mb-2">
                📍{" "}
                <a
                  href="https://yandex.com/maps/org/assotsiatsiya_lounge/237780135075/?ll=37.822136%2C55.720403&z=16"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-white/20 hover:decoration-orange-400 hover:text-orange-400 transition-colors"
                >
                  Москва, Вешняковская улица, 22А (этаж 4)
                </a>
              </p>

              <p className="text-zinc-400 mb-2">
                📞{" "}
                <a
                  href="tel:+79651171889"
                  className="hover:text-orange-400 transition-colors"
                >
                  +7 965 117 18 89
                </a>
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/association_lounge?igsh=MXh0dGplbGN4dnNoZQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://t.me/AssociateLounge"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">Акции</h3>

              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                  <span>Скидка в день рождения 10%</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                  <span>До 17:00 кальян 1700₽ вместо 2300₽</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                  <span>Бонусная система</span>
                </li>
              </ul>
            </div>
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
                          <span className="text-orange-500">
                            000 ₽
                          </span>

                          <button className="border border-zinc-700 px-4 py-2 rounded-full hover:border-orange-400 transition-all duration-300">
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