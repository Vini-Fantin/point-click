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
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
