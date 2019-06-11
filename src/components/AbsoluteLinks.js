import React, { Fragment } from 'react';

const AbsoluteLinks = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <a id="home_link" className="nav-link" href="/#home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a id="service_link" className="nav-link" href="/#service">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a id="counter_link" className="nav-link" href="/#counter">
          Counter Us
        </a>
      </li>
      <li className="nav-item">
        <a id="contact_link" className="nav-link" href="/#contact">
          Contact
        </a>
      </li>
    </Fragment>
  );
};
export default AbsoluteLinks;
