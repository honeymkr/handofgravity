import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Header = () => (

  <StaticQuery
    query={graphql`
      query {
        art_logo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "wavy" }
        ) {
          childImageSharp {
            fluid(maxWidth: 615) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}


    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
              <Art>
              <Img fluid={data.art_logo.childImageSharp.fluid} />
            </Art>

           <div>  <h2>Visionary Coaching</h2>
           <p>
            I work with successful people to expand their visions. I create
            clarity, inspiration, and transformations in people's businesses, teams or projects
            so that they're unleashed in life. 
            <br/>
            Vision is what carries the spirit of big ideas and brings things to existence. It's such a vital element
            yet most people take Vision for granted. I see business owners struggle all the time with what 
            they Think are their problems - unmotivated employees, doing everything themselves, circumstances and more.
            <br/>
            A lot of successful people feeling frustrated and drained! 
            <br/>
            I empower people to discover
            and transform their biggest problems by training folks to:            
            </p>
            <h3>CULTIVATE VISION</h3>
           </div>
           

          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 100%;

    @media (max-width: ${props => props.theme.screen.sm}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 0;
    }
  }
`;


export default Header;
