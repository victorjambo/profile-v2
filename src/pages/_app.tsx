import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
