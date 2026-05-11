import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ассоциация Lounge",
  description: "Премиальный лаунж: меню, мероприятия, контакты.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-wide text-brand hover:text-brand-hover transition-colors"
            >
              Ассоциация Lounge
            </Link>

            <nav className="flex items-center gap-2">
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
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
