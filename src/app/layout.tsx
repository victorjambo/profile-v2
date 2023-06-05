import "./globals.css";
import { headers } from "next/headers";
import { Providers } from "./providers";
import Header from "@/components/header";

export const metadata = {
  title: "Victor Mutai",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userAgent = headers().get("user-agent"); // "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
  console.log({ userAgent });

  return (
    <html lang="en" className="scroll-smooth w-full box-border">
      <Header />
      <body className="bg-white dark:bg-slate-900 font-mono">
        <Providers userAgent={userAgent as string}>{children}</Providers>
      </body>
    </html>
  );
}
