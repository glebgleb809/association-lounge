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
          <div className="max-w-7xl mx-auto flex min-w-0 flex-nowrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="shrink-0 hover:opacity-90 transition-opacity"
            >
              <BrandWordmarkNav />
            </Link>

            <nav className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-1 overflow-x-auto py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
              <Link
                href="/"
                className="shrink-0 whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1.5 text-xs hover:border-brand-hover hover:text-brand-hover sm:px-4 sm:py-2 sm:text-sm transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/events"
                className="shrink-0 whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1.5 text-xs hover:border-brand-hover hover:text-brand-hover sm:px-4 sm:py-2 sm:text-sm transition-colors"
              >
                Мероприятия
              </Link>
              <Link
                href="/vip"
                className="shrink-0 whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1.5 text-xs hover:border-brand-hover hover:text-brand-hover sm:px-4 sm:py-2 sm:text-sm transition-colors"
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
