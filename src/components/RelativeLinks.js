import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

const RelativeLinks = () => {
  return (
    <Fragment>
      <li className="nav-item">
        <Link
          to="home"
          smooth
          spy
          activeClass="active-link"
          className="nav-link"
        >
          HOME
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="service"
          smooth
          spy
          activeClass="active-link"
          className="nav-link"
        >
          Service
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="counter"
          smooth
          spy
          activeClass="active-link "
          className="nav-link"
        >
          Counter Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact"
          smooth
          spy
          activeClass="active-link"
          className="nav-link"
        >
          Contact
        </Link>
      </li>
    </Fragment>
  );
};
export default RelativeLinks;
