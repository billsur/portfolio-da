import Head from "next/head";

const MetaTags = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Billy Surya" />
        <meta
          name="description"
          content="Data Analyst and Front-end Developer | Portfolio"
        />
        <meta
          name="keywords"
          content="Data Analyst, Front-end, web development,Front-end portfolio,  react js developer"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-favicon.svg" />
      </Head>
    </>
  );
};

export default MetaTags;
