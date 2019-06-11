import React, { Component } from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Comparison from '../components/Comparison';

class Pricing extends Component {
  render() {
    return (
      <Layout>
        <Seo
          title='Pricing'
          description="Pricing plan using NavD services"
          url="/pricing/"
          image={config.image}
        />
        <Comparison />
      </Layout>
    );
  }
}

export default Pricing;