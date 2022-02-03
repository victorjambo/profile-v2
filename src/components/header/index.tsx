import Head from "next/head";
import { DEV_NAME, DEV_ROLE } from "@/utils/data";
import FontLoader from "./fontLoader";
import SEO from "./seo";

const Header: React.FC = () => {
  return (
    <Head>
      <title>{DEV_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
      <SEO />
      <FontLoader />
    </Head>
  );
};

export default Header;
