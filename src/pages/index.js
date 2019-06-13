import React from 'react';
import Home from '../components/Home';
import Main from '../components/Main';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';

const IndexPage = () => (
  <Layout>
    <Seo
    index 
      title={config.siteName}
      description={config.description}
      url={`${config.siteUrl}`}
      image={config.image}
    />
    <Home />
    <Main />
  </Layout>
);

export default IndexPage;
