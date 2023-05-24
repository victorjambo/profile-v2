/* eslint-disable @next/next/no-head-element */
import FontLoader from "./fontLoader";
import SEO from "./seo";

const Header: React.FC = () => {
  return (
    <head>
      <SEO />
      <link rel="icon" href="/favicon.ico" />
      <FontLoader />
    </head>
  );
};

export default Header;
