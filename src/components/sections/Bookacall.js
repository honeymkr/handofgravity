import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import Calendly from '@sections/Calendly';

const BookaCall = () => (
  <StaticQuery
    query={graphql`
      query {
        art_book: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "bookme" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="book-a-call">
<Container>
  <Grid>
      <div>

            <h2>Your Breakthrough is Calling</h2>
            <h3>
            By going to work on Your Vision together, we illuminate untapped potential
            and discover hidden opportunity in your work. 
            </h3>
            
            <h3>
            Book a FREE 45-60 minute call to learn more about Visionary Coaching. </h3>
            <Button
      href="https://calendly.com/handofgravity/"
      target="_blank"
      rel="noopener"
      primary
    >
      Schedule an Envisioning Session Here!
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
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 0;

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
/* This renders the buttons above... Edit me! */
display: inline-block;
border-radius: 9px;
padding: 0.7rem 0.5rem;
margin: 0.5rem 1rem;
background: skyblue;
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

const Art = styled.figure`
margin: 0;
max-width: 380px;
width: 100%;
`;

export default BookaCall;
