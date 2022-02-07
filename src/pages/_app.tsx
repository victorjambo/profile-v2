import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import ScrollControlProvider from "@/context/scrollControl";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ScrollControlProvider>
      <Header />
      <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
        <Component {...pageProps} />
      </ThemeProvider>
    </ScrollControlProvider>
  );
};

export default App;
