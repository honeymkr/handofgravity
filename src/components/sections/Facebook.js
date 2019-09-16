import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Facebook = () => (
    <StaticQuery
      query={graphql`
        query {
          art_community: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "waves" }
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
        <Section id="facebook" accent>
  <Container>
    <Grid>
          <div>
        <h3>Learn More</h3>
        <p>We've set up a Facebook group to host a community conversation about Being Visionary. 
          We share weekly insights and feature members to highlight their transformations!
          Ask questions and see what others are really getting by working with Hand Of Gravity.
       </p>
          <Button
      href="https://www.facebook.com/Hand-Of-Gravity-2303130916616921"
      target="_blank"
      rel="noopener"
      primary
    >
      Join Our Facebook Community
    </Button>
           
        </div>
           
            <Art>
              <Img fluid={data.art_community.childImageSharp.fluid} />
            </Art>
  
    </Grid>
  </Container>
        </Section>
      )}
    />
  );
  
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 40px;
    text-align: right;
    align-items: center;
    justify-items: center;
    margin: 24px 0;
  
    ${props =>
      props.inverse &&
      `
      text-align: left;
      grid-template-columns: 2fr 3fr;
    `}
  
    h2 {
      margin-bottom: 16px;
    }
  
    @media (max-width: ${props => props.theme.screen.md}) {
      grid-template-columns: 1fr;
      text-align: left;
      margin-bottom: 96px;
  
      &:last-child {
        margin-bottom: 24px;
      }
  
      ${props =>
        props.inverse &&
        `
          ${Art} {
            order: 2;
          }
      `}
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
`;


  const Art = styled.figure`
  margin: 0;
  max-width: 615px;
  width: 100%;
  `;

export default Facebook;
