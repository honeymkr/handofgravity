import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

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
      <Section id="book-a-call" accent>
<Container>
  <Grid>
      <div>

           <Button
      href="https://calendly.com/handofgravity/"
      target="_blank"
      rel="noopener"
      primary
    >
      Schedule an Envisioning Session Here!
    </Button>

            <h3>Let's Talk.</h3>
            <h3>Discover hidden value in your work or project in a 45 minute conversation.</h3>
            <h3>We will expand your vision, leaving you inspired and completely clear about whether signing up 
              for Hand Of Gravity Coaching is right for you.</h3>
            <h3>Book a Free Breakthrough call with me today.</h3>
            <h3>Pick a date on the Calendly app here and follow the prompt.
            </h3>
              
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
