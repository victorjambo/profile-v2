import Head from "next/head";
import FontLoader from "./fontLoader";

const Header: React.FC = () => {
  return (
    <Head>
      <title>Victor Mutai</title>
      <meta name="description" content="Web3 Software Engineer" />
      <link rel="icon" href="/favicon.ico" />
      <FontLoader />
    </Head>
  );
};

export default Header;
