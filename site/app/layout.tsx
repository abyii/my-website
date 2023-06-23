import "./globals.css";
import { Mulish } from "next/font/google";

const inter = Mulish({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
