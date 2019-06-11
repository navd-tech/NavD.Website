import React, { Component } from 'react';
import {useCoolies} from '../utils/config'

class Cookies extends Component {
  constructor(props) {
    super(props);
    this.closeCookiesPanel = this.closeCookiesPanel.bind(this);
    this.state = {
        collapse: useCoolies,
    };
  }

  closeCookiesPanel(){
      this.setState({ collapse: false });
  }

  render() {
    const { collapse } = this.state;
    const classCollapsed = collapse ? 'alert text-center cookiealert show' :  'alert text-center cookiealert'; 

    return (
      <div className={classCollapsed} role="alert">
        This site uses cookies to deliver our services. By using our site, you
        acknowledge that you have read and understand our Cookie Policy, Privacy
        Policy, and our Terms of Service.
        <button
          type="button"
          className="btn btn-primary btn-sm acceptcookies"
          aria-label="Close"
          onClick={this.closeCookiesPanel}
        >
          I agree
        </button>
        <p>
          <a className="text-right" href="/privacy">
            Learn More
          </a>
        </p>
      </div>
    );
  }
}

export default Cookies;
