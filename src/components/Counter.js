import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const Counter = () => {
  return (
    <section id="counter" className="counter" name="counter">
      <div className="row counters">
        <div className="col-lg-3 col-6 text-center">
          <div className="single_counter_right">
            <i className="fa fa-ship" />
            <h2>
              {' '}
              <TrackVisibility>
                {({ isVisible }) =>
                  isVisible && <CountUp start={0} end={2400} />
                }
              </TrackVisibility>
            </h2>
            <p>Vessels Tracking</p>
          </div>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <div className="single_counter_right">
            <i className="fa lnr lnr-earth" />
            <h2>
              {' '}
              <TrackVisibility>
                {({ isVisible }) =>
                  isVisible && <CountUp start={0} end={4510} />
                }
              </TrackVisibility>
            </h2>
            <p>Satellite images</p>
          </div>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <div className="single_counter_right">
            <i className="lnr lnr-users" />
            <h2 className="statistic-counter">
              {' '}
              <TrackVisibility>
                {({ isVisible }) =>
                  isVisible && <CountUp start={0} end={1800} />
                }
              </TrackVisibility>
            </h2>
            <p>Shipping Companies</p>
          </div>
        </div>
        <div className="col-lg-3 col-6 text-center">
          <div className="single_counter_right">
            <i className="fa fa-line-chart" />
            <h2 className="statistic-counter">
              {' '}
              <TrackVisibility>
                {({ isVisible }) =>
                  isVisible && <CountUp start={0} end={5500} />
                }
              </TrackVisibility>
            </h2>
            <p>Port congestions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
