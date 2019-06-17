import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import TermsAndConditionDescription from '../components/TermsAndConditionDescription';

export default class TermsConditions extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Pricacy"
          description="Privacy Policy"
          url="/privacy/"
          image={config.image}
        />
        <TermsAndConditionDescription />
      </Layout>
    );
  }
}