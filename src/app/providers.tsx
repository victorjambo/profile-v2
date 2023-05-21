"use client";

import DeviceDetectProvider from "@/context/deviceDetect";
import ScrollControlProvider from "@/context/scrollControl";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  userAgent,
}: {
  children: React.ReactNode;
  userAgent: string;
}) {
  return (
    <DeviceDetectProvider userAgent={userAgent}>
      <ScrollControlProvider>
        <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
          {children}
        </ThemeProvider>
      </ScrollControlProvider>
    </DeviceDetectProvider>
  );
}
