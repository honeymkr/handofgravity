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

           <div>  
             <h1>Visionary Coaching</h1>
             <h3>Do you struggle to maintain creativity?</h3>
             <h3>How do you stay inspired in the face of your circumstances?</h3>
             <h3>The difference between a visionary and someone with some great ideas
               is that a visionary knows how to cultivate vision and manage their fears.
               By this spirit, a visionary maintains creativity that seems ahead of the curve
               and is unstoppable in their pursuits which change the world!</h3>
             <h3>Hand Of Gravity Coaching is a 2 month course that trains you to be visionary.</h3>
             </div>
        
            <div>
             <h3>What would it be like to have New depth of clarity about your 
               business, startup idea, project or career change?</h3>
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
