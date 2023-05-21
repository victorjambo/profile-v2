import "./globals.css";
import { headers } from "next/headers";
import { Providers } from "./providers";

export const metadata = {
  title: "Victor Mutai",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userAgent = headers().get("user-agent") ?? navigator.userAgent;

  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 font-mono">
        <Providers userAgent={userAgent}>{children}</Providers>
      </body>
    </html>
  );
}
