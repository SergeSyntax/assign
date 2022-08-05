import React from 'react';
import Head from 'next/head';

interface Props {
  siteTitle?: string;
  title?: string;
  description: string;
}

export const SEO: React.FC<Props> = ({ title, description, siteTitle = 'Assign' }) => {
  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      {/* <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} /> */}
    </Head>
  );
};
