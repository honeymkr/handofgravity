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
            fluid(maxWidth: 100) {
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

           <div>  <h2>Vision</h2>
           <p>
            Is the most important aspect of your work! It's what inspires people into action and wakes them up. 
            It's what makes things fun and easy when everyone is working together, thinking together!
            Vision carries the spirit of a group by enabling a sense of connection to the big picture. 
            It may seem like magic but it's not. It takes intentional focus by leaders like you to maintain the 
            light at the end of the tunnel.
            </p>
            <p>
            Do you have a major project that's stalling? Do you have the sense of 'doing everything on your own'?
            Big projects are riddled with circumstances that can leave leadership tired, feeling like they can't find 
            the right help! 
              </p>
              <p>If you're tired of spinning your wheels - you've come to the right place.</p></div>
           

          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
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
