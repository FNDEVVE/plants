import { i18n, type Locale } from "@/i18n-config";
import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const league_spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Plants",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} ${league_spartan.variable} bg-green-25`}
      >
        {children}
      </body>
    </html>
  );
}
