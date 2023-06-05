"use client";
import ScrollControlProvider from "@/context/scrollControl";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollControlProvider>
      <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
        {children}
      </ThemeProvider>
    </ScrollControlProvider>
  );
}
