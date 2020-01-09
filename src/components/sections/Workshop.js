import React from 'react';

import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';

const Workshop = () => (
  <StaticQuery
  query={graphql`
  query {
    creativity_wkshp: file(
      sourceInstanceName: { eq: "art" }
      name: { eq: "workshop" }
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
      <Section id="workshop" accent>
        <Container>
        <Grid>
          
          <div>
              <Heady>Hand Of Gravity Coaching</Heady>
              <Art>
              <Img fluid={data.creativity_wkshp.childImageSharp.fluid} />
            </Art>

            <h4>
            We live in a world of information overload that takes a toll on the quality of our creative output. 

Distracted by social media, the news, our mobile devices - our brains constantly comparing ourselves which leads to doubt, or not feeling ready to take new direction,

A fear of rejection is often the biggest threat to being bold, next to being responsible for what we create and follow through on.

Proven strategies are addictive because we are lazy.

Fitting in to be validated with our work rips off the audience and dulls our creative edge. Inspiration goes missing when we can’t generate our own.

This is a workshop intensive about discovery for new creative results for your brand, business idea, art.

            </h4>

<Button
      href="https://www.eventbrite.com/e/being-visionary-creativity-masterclass-tickets-89074928509?aff=pilot1"
      target="_blank"
      rel="noopener"
      primary
    >
   Purchase your Tickets
    </Button>


              </div>
         
            
          
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 10px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 10px 0;

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
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 1;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 615px;
  width: 100%;
`;
const Heady = styled.h2`
color: red;
`;

const Button = styled.a`
display: inline-block;
border-radius: 9px;
padding: 0.7rem 0.5rem;
margin: 0.5rem 1rem;
background: orange;
color: black;
font-family: 'Avenir',sans-serif;
text-decoration: none;
font-size: 2rem;
`;

export default Workshop;
