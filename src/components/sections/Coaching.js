import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Container } from '@components/global';

const Coaching = () => (
  <StaticQuery
  query={graphql`
  query {
    art_glow: file(
      sourceInstanceName: { eq: "art" }
      name: { eq: "glow" }
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
      <Section id="coaching">
        <Container>
        <Grid>
          
          <div>
              <h2>Visionary Coaching</h2>
              <p>
                What we're talking about is going to work on your vision - be it a business, special project
                or life change. This is for people who are committed to something HUGE and are confronted by 
                the many defining circumstances standing in the way. This isn't just for creative people - This is for uncreative 
                people to get what the best creatives have - FREEDOM. 
              </p>
              <p>How can you do this?</p>
              <h3>Hand of Gravity trains you to cultivate your vision so that you're left with a 
                life of joy, fun and freedom in your future endeavors!</h3>
            </div>
         
            <Art>
              <Img fluid={data.art_glow.childImageSharp.fluid} />
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

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Coaching;
