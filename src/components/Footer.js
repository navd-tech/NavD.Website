import React, { Component } from 'react';

class footerMenu extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="main_footer">
            <div className="row">
              <div className="copyright col-sm-6 col-xs-12">
                <p>
                  <a href="./privacy">Acceptance of Terms & Privacy</a> <br />{' '}
                  Copyright &copy; {this.getYear()} NavD Technologies, Inc. All
                  Rights Reserved
                </p>
              </div>
              <div className="credits col-sm-6 col-xs-12">
                <div className="footer_social">
                  <a
                    href="https://www.linkedin.com/company/navd-tech"
                    aria-label="linkedin"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  <a
                    href="https://twitter.com/NavD_Tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="twitter"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="https://github.com/navd-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                  >
                    <i className="fa fa-github" />
                  </a>
                  <a
                    href="https://www.instagram.com/navdtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default footerMenu;
