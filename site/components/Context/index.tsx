"use client";

import { ThemeProvider } from "next-themes";

function Context({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}

export default Context;
