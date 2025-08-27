import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a website to represent the portfolio of Bangera Paveen Sudhakar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${montserrat.className} font-bold`}>
          {children}
          <script src="https://app.embed.im/snow.js" defer></script>
        </div>
      </body>
    </html>
  );
}
