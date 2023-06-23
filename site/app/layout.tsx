import "./globals.css";
import { Mulish, Playfair, Spline_Sans_Mono } from "next/font/google";
import Context from "@abhyi/components/Context";

const sans = Mulish({
  variable: "--font-mulish-sans",
});
const serif = Playfair({
  variable: "--font-playfair-serif",
});
const mono = Spline_Sans_Mono({ variable: "--font-spline-mono" });

export const metadata = {
  title: "@abhyi",
  description: "Developer and Designer based in Bengaluru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      style={{ scrollbarGutter: "stable" }}
    >
      <Context>
        <body>{children}</body>
      </Context>
    </html>
  );
}
