import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "construction-dock.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          name="call-to-action"
          classId="call-to-action"
          fluid={imageData}
        >
          <div className="call-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left">
                <h3 className="cta-title">Explore solutions</h3>
                <p className="cta-text">
                  Interactively explore marinetime big data and find insights
                  beyond the reach of mainstream tools
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-right">
                <a className="btn btn-md" href="./#contact">
                  Need help?
                </a>
              </div>
            </div>
          </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const Call = styled(BackgroundSection)`
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) !important;
background-repeat: no-repeat;
background-position: center , center;
  padding: 180px 0;
  background-size: cover;
  position: fixed;
`;

export default Call;
