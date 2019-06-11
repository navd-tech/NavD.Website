import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "slider4.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
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
          name="home"
          classId="home"
          fluid={imageData}
        >
          <div className="overlay home-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 ">
                  <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                  >
                    <div>
                      <h1>Having maritime with AI thinking</h1>
                      <p className="subtitle">
                        AI solutions improving your business
                      </p>
                      <a className="btn btn-md" href="/pricing">
                        Learn More
                      </a>
                    </div>
                    <div>
                      <h1>Navigating was never easier with AI</h1>
                      <p className="subtitle">
                        Use AI-powered navigation in shipping
                      </p>
                      <a className="btn btn-md" href="/pricing">
                        Learn More
                      </a>
                    </div>
                    <div>
                      <h1>Maritime AI personal assistance</h1>
                      <p className="subtitle">AI tools for your business</p>
                      <a className="btn btn-md" href="/pricing">
                        Learn More
                      </a>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

const Home = styled(BackgroundSection)`
width: 100%;
height: 100vh;
background-size: cover;
position: relative;
`;

export default Home;
