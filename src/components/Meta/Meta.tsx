import type { MetaProps } from "./types";

import Head from "next/head";

const Meta = (props: MetaProps): React.ReactElement => {
  const { title, description, keywords } = props;

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      {keywords && <meta name="keywords" content={keywords} />}
      {description && <meta name="description" content={description} />}
      <meta charSet="utf-8" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "AwraSafely",
  keywords: "awra-safely-crm",
  description: "This is AwraSafely  Customer Relationship Management",
};

export default Meta;
