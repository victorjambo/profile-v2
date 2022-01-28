import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Victor Mutai</title>
        <meta name="description" content="Web3 Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={theme}>
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex justify-center items-center text-3xl align-middle h-screen font-mono">
          <div className="flex flex-col">
            <div>Welcome Victor {theme}</div>
            <div className="flex flex-row space-x-2">
              <button
                className="py-2 px-4 bg-slate-900 text-white rounded-md border"
                onClick={() => setTheme("dark")}
              >
                dark
              </button>

              <button
                className="py-2 px-4 bg-white text-slate-900 rounded-md border"
                onClick={() => setTheme("light")}
              >
                light
              </button>

              <button
                className="py-2 px-4 bg-green-500 rounded-md border"
                onClick={() => setTheme("system")}
              >
                system
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
