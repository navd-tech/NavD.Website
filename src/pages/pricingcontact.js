import React, { Component } from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import PricingContactForm from '../components/PricingContactForm';

class PricingContact extends Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Pricing Conatct"
          description="Contact us for pricing plans"
          url="/pricingcontact/"
          image={config.image}
        />
        <PricingContactForm />
      </Layout>
    );
  }
}

export default PricingContact;