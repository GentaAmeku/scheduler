import React from 'react';
import Helmet from 'react-helmet';

const siteMetadata = {
  siteName: 'scheduler',
  title: 'Scheduler',
  description: 'description',
  lang: 'ja',
  shortName: 'shortname',
  author: 'Amahisa',
  pathPrefix: '/',
  siteUrl: 'https://example.com',
  background_color: '#ffffff', // アプリ起動時の背景色
  theme_color: '#65c7f7', // ブラウザツールバーの色
  favicon: 'src/images/favicon.jpg',
  logo: 'src/images/logo.png',
  googleAnalyticsID: 'UA-XXXXXXXX-1',
};

export const SEO = ({ title = '', description }) => {
  const metaDescription = description || siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.lang,
      }}
      title={title || siteMetadata.title}
      titleTemplate={title && `%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.siteName,
        },
        {
          property: `og:image`,
          content: siteMetadata.logo,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
