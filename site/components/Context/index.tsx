"use client";

import { ThemeProvider } from "next-themes";

function Context({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme={"dark"}
      themes={["light", "dark"]}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}

export default Context;
