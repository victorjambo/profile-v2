import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <ThemeProvider defaultTheme="system" attribute="class">
        <div className="bg-white dark:bg-slate-900 font-mono">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
