import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Victor Mutai</title>
        <meta name="description" content="Web3 Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center text-3xl align-middle h-screen">
        Welcome Victor
      </div>
    </div>
  );
};

export default Home;
