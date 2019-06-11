import React from 'react';


const Services = () => {
  return (
    <section id="service" name="service">
      <div className="container main_service_area">
        <div className="row">
          <div className="col-lg-6 content order-lg-1 order-1">
            <div className="signle_service_left">
              <h2>What We Do</h2>
            </div>
          </div>
          <div className="col-lg-6 background order-lg-2 order-2">
            <div className="single_service_right">
              <div className="single_service">
                <div className="single_service_icon">
                  <i className="lnr lnr-laptop-phone" />
                </div>
                <div className="single_service_content">
                  <h3>Big Data Analysis</h3>
                  <p>
                    Data play a key role in the design of ships in the future,
                    bringing together the findings from sensors in order to
                    improve the resilience of designs in the future. The ability
                    to analyze huge volumes of shipping data to drive decisions
                    on further improving vessel operations.
                  </p>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_icon">
                  <i className="lnr lnr-screen" />
                </div>
                <div className="single_service_content">
                  <h3>Predictive Services</h3>
                  <p>
                    Our predictive models use variable selection algorithms and
                    best-practice, cross-validation methods to break through the
                    noise in big data, pinpoint important variables, and deliver
                    accurate predictions of market outcomes.
                  </p>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_icon">
                  <i className="lnr lnr-picture" />
                </div>
                <div className="single_service_content">
                  <h3>Deep Learning Analytics</h3>
                  <p>
                    Detect known and previously unknown shipping events, ship to
                    port, ship to ship with satellite images unleash the power
                    of deep learning and recognizing patterns in real-time.
                  </p>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_icon">
                  <i className="lnr lnr-laptop-phone" />
                </div>
                <div className="single_service_content">
                  <h3>Strong Mapping Visualizations</h3>
                  <p>
                    Today, most big data has been enriched with location
                    information that mainstream BI tools simply can&apos;t process
                    and display at granular levels. Our breakthrough technology
                    is able to instantly display up to billions AIS signals in
                    interactive maps and charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
