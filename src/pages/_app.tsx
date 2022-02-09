import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import ScrollControlProvider from "@/context/scrollControl";
import DeviceDetectProvider from "@/context/deviceDetect";

const App = ({ Component, pageProps }: AppProps) => {
  const { userAgent } = pageProps;
  
  return (
    <DeviceDetectProvider userAgent={userAgent}>
      <ScrollControlProvider>
        <Header />
        <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
          <Component {...pageProps} />
        </ThemeProvider>
      </ScrollControlProvider>
    </DeviceDetectProvider>
  );
};

export default App;
