"use client";

import { ThemeProvider } from "next-themes";

function Context({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      themes={["light", "dark"]}
      enableColorScheme
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}

export default Context;
