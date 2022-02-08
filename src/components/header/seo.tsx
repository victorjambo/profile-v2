const SEO: React.FC = () => {
  const title = "Victor Mutai";
  const description = "Victor Mutai Software Engineer";
  const twitter = "victor_jambo";
  const image = "/images/banner.png";

  return (
    <>
      <meta name="description" content={description} />
      <meta name="keywords" content="victor, mutai, web3, engineer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image0" content={image} />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
};

export default SEO;
