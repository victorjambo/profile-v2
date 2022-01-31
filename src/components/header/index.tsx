import Head from "next/head";
import { DEV_NAME, DEV_ROLE } from "@/utils/data";
import FontLoader from "./fontLoader";

const Header: React.FC = () => {
  return (
    <Head>
      <title>{DEV_NAME}</title>
      <meta name="description" content={DEV_ROLE} />
      <link rel="icon" href="/favicon.ico" />
      <FontLoader />
    </Head>
  );
};

export default Header;
