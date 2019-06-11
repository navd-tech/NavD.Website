import React, { Component } from 'react';
import RelativeLinks from './RelativeLinks';
import AbsoluteLinks from './AbsoluteLinks';
import logoSmall from '../images/logo_small.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.addEventOnScroll = this.addEventOnScroll.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.state = {
      collapsed: true,
      isTop: true,
      location: '',
    };
  }

  componentDidMount() {
    this.addEventOnScroll();
    this.getCurrentLocation();
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  getCurrentLocation(){
    this.setState({location : window.location.pathname});
  }

  getRightLink(isinindexpage) {
    if (isinindexpage === '/') {
      return <RelativeLinks />;
    }
    return <AbsoluteLinks />;
  }

  addEventOnScroll() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  toggleNavbar() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed, location } = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show ';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';

    const classThree = collapsed ? 'mobile-nav-block-non' : 'mobile-nav-block';

    const classToggleButton = collapsed ? 'fa fa-bars' : ' fa fa-times';

    const classScrollBar = this.state.isTop
      ? 'navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top'
      : 'navbar navbar-expand-lg navbar-light navbar-default fixed-top header-fixed';


    const links = this.getRightLink(location);

    return (
      <header id="main_menu" className="header navbar-fixed-top">
        <div className="main_menu_bg">
          <nav className={`${classScrollBar}`}>
            <a className="navbar-brand" href="/">
              <img src={logoSmall} alt="logo" />
            </a>
            <button
              className={`${classTwo}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNavbar}
              id="mobile-nav-toggle"
            >
              <i className={`${classToggleButton}`} />
            </button>
            <div className={`${classOne}`} id="navbarNav">
              <ul className="navbar-nav nav-menu ml-auto">
                {links}
                <li className="nav-item">
                  <a id="pricing_link" className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div id="mobile-body-overly" className={`${classThree}`} />
        </div>
      </header>
    );
  }
}

export default Menu;
