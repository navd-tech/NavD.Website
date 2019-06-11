import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import './Layout.css';
import config from '../utils/config';
import Menu from './Menu';
import FooterMenu from './Footer';
import Cookies from './Cookies'

const Container = styled.div``;
const IndexLayout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>

    <Menu />
    <Container>{children}</Container>
    <FooterMenu />
    <Cookies />
    <div className="scrollup">
      <Link to="home" smooth>
        <i className="fa fa-chevron-up" />
      </Link>
    </div>
  </React.Fragment>
);

export default IndexLayout;
