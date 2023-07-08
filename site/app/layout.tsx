import "./globals.css";
import { Inter, Playfair_Display, Spline_Sans_Mono } from "next/font/google";
import Context from "@abhyi/components/Context";
import Script from "next/script";

const sans = Inter({
  variable: "--font-inter",
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
      <head>
        <meta name="theme-color" content="#000000" />

        {/* microsoft clarity tracking */}
        <Script id="clarity-ms" strategy="afterInteractive">
          {`
           (function(c,l,a,r,i,t,y){
               c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
               t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
               y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
           })(window, document, "clarity", "script", "hw90n6krmu");
          `}
        </Script>
      </head>
      <Context>
        <body>{children}</body>
      </Context>
    </html>
  );
}
