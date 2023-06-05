import "./globals.css";
// import { headers } from "next/headers";
// import { Providers } from "./providers";
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
  // const userAgent = headers().get("user-agent") ?? navigator.userAgent;

  return (
    <html lang="en" className="scroll-smooth w-full box-border">
      <Header />
      <body className="bg-white dark:bg-slate-900 font-mono">
        {/* <Providers userAgent={userAgent}>{children}</Providers> */}
        <div>hello world</div>
      </body>
    </html>
  );
}
