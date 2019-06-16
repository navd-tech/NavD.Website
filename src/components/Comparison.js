import React from 'react';

const Comparison = () => {
  return (
    <section className="pricing">
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">Flexible options that move with you.</p>
      </div>

      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0
                <small className="text-muted">
                  / <br />
                  mo
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>2 GB of storage</li>
                <li>Public datasets access</li>
                <li>Public experiments</li>
                <li>Public predictived services</li>
                <li>Help center access</li>
              </ul>
              <a
                id="pro-link"
                className="btn btn-lg btn-block btn-primary"
                href="/pricingcontact/"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $460
                <small className="text-muted">
                  / <br />
                  mo
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>4 TB of storage</li>
                <li>Private datasets access</li>
                <li>Private experiments</li>
                <li>Private predictived services</li>
                <li>Priority email support</li>
              </ul>
              <a
                id="pro-link"
                className="btn btn-lg btn-block btn-primary"
                href="/pricingcontact/"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $1200
                <small className="text-muted">
                  / <br />
                  mo
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Custom size of storage</li>
                <li>
                  Private <u>exclusive</u> datasets access
                </li>
                <li>
                  Private <u>exclusive</u> experiments
                </li>
                <li>
                  Private <u>exclusive</u> predictived services
                </li>
                <li>Phone and email support</li>
              </ul>
              <a
                id="enterprise-link"
                className="btn btn-lg btn-block btn-primary"
                href="/pricingcontact/"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
