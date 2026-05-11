import { Cinzel, Montserrat } from "next/font/google";
import Link from "next/link";
import { BrandWordmarkNav } from "@/components/BrandWordmark";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Ассоциация Lounge",
  description: "Премиальный лаунж: меню, мероприятия, контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans font-normal">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="hover:opacity-90 transition-opacity"
            >
              <BrandWordmarkNav />
            </Link>

            <nav className="flex flex-wrap items-center gap-2">
              <Link
                href="/"
                className="px-4 py-2 rounded-full text-sm border border-white/10 hover:border-brand-hover hover:text-brand-hover transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/events"
                className="px-4 py-2 rounded-full text-sm border border-white/10 hover:border-brand-hover hover:text-brand-hover transition-colors"
              >
                Мероприятия
              </Link>
              <Link
                href="/vip"
                className="px-4 py-2 rounded-full text-sm border border-white/10 hover:border-brand-hover hover:text-brand-hover transition-colors"
              >
                VIP-комната
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
