import React from 'react';
import styled, {css} from 'styled-components';
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
             <Button
      href="https://calendly.com/handofgravity/"
      target="_blank"
      rel="noopener"
      primary
    >
      Schedule an Envisioning Session
    </Button>
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

 const Button = styled.a`
  display: inline-block;
  border-radius: 9px;
  padding: 0.7rem 0.5rem;
  margin: 0.5rem 1rem;
  background: red;
  color: black;
  font-family: 'Avenir',sans-serif;
  text-decoration: none;
  font-size: 2rem;

${props => props.animated && css`
    &:hover {
      position: fixed;
      transform: translate(0%, -30%);
      transition: 0.3s ease-out;
    }
  `}
`;


export default Header;
