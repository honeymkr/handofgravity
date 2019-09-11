import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (

  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "wavy" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
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
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
            
              <h3>
            Vision is the most important aspect of your work! It's what inspires people into action and wakes them up. 
            It's what makes things fun and easy when everyone is working together, thinking together!
            Vision carries the spirit of a group by enabling a sense of connection to the big picture. 
            It may seem like magic but it's not. It takes intentional focus by leaders like you to maintain the 
            light at the end of the tunnel or the big prize in the sky, so to speak..
            Consider what happens to Vision after awhile: it disappears
            with the onslaught of project circumstances, reasons, doubts and conditional thinking. Hand of Gravity 
            is about training you to create and cultivate vision that shakes things up!


              </h3>
  </Text>
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

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
