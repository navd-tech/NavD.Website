import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import config from '../utils/config';



const getSchemaOrgJSONLD = ({ url, title }) => [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    alternateName: config.siteName,
  },
];

const Seo = ({ title, description, url, image, index }) => {
    const pageTitle = index? `${title}`: `${title} - ${config.siteName}`;
    const targetUrl = process.env.GATSBY_TARGET_ADDRESS + url;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    targetUrl,
    pageTitle,
    image,
    description,
  });

  return (

    <Helmet
      htmlAttributes={{
        lang: config.siteLanguage,
        prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#',
      }}
    >
      {/* General tags */}
      
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={targetUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.defaultProps = {
  url: config.siteUrl,
  image: `${config.siteUrl}/${config.logo}`,
};

Seo.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default Seo;
