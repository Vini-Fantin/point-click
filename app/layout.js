import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"]
});

export const metadata = {
  title: "Cuidados Saude",
  description: "Cuidados Saude",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} antialiased bg-[--color-bg] text-gray-900`}>
        <link rel="preload" as="image" href="/sala-de-estar.png" />
        <link rel="preload" as="image" href="/banheiro.png" />
        <link rel="preload" as="image" href="/quarto.jpg" />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
