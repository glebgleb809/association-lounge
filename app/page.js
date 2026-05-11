import Image from "next/image";
import { BrandWordmarkHero } from "@/components/BrandWordmark";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full text-center">
          <BrandWordmarkHero />

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://web.telegram.org/a/#6718462461"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-brand text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Забронировать столик
            </a>
            <a
              href="/events"
              className="border border-white/15 px-10 py-4 rounded-full text-lg font-medium hover:border-brand-hover hover:text-brand-hover transition-all duration-300"
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
                  className="underline underline-offset-4 decoration-white/20 hover:decoration-brand-hover hover:text-brand-hover transition-colors"
                >
                  Москва, Вешняковская улица, 22А (этаж 4)
                </a>
              </p>

              <p className="text-zinc-400 mb-2">
                📞{" "}
                <a
                  href="tel:+79651171889"
                  className="hover:text-brand-hover transition-colors"
                >
                  +7 965 117 18 89
                </a>
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/association_lounge?igsh=MXh0dGplbGN4dnNoZQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:text-brand-hover transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://t.me/AssociateLounge"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:text-brand-hover transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-6 text-left">
              <h3 className="text-2xl mb-4 font-semibold">Акции</h3>

              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span>Скидка в день рождения 10%</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span>До 17:00 кальян 1700₽ вместо 2300₽</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span>Бонусная система</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold">Меню</h2>
          </div>

          <div className="flex flex-col gap-10">
            <Image
              src="/menu-1.png"
              alt="Меню: блюда и закуски"
              width={958}
              height={862}
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <Image
              src="/menu-2.png"
              alt="Меню: напитки"
              width={818}
              height={1024}
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}