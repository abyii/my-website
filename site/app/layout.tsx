import "./globals.css";
import { Mulish, Playfair_Display, Spline_Sans_Mono } from "next/font/google";
import Context from "@abhyi/components/Context";

const sans = Mulish({
  variable: "--font-mulish-sans",
  subsets: ["latin-ext"],
});
const serif = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["latin-ext"],
});
const mono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin-ext"],
});

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
