"use client";

import DeviceDetectProvider from "@/context/deviceDetect";
import ScrollControlProvider from "@/context/scrollControl";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DeviceDetectProvider>
      <ScrollControlProvider>
        <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
          {children}
        </ThemeProvider>
      </ScrollControlProvider>
    </DeviceDetectProvider>
  );
}
