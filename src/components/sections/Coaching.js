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
      <Section id="coaching" accent>
        <Container>
        <Grid>
          
          <div>
              <h2>For Entrepreneurs &amp; Artists</h2>
              
            <h3>
            People like yourself create awesome ideas which start off with 
            a huge bang of excitement. Then, as you put Your vision out there in the world - 
            what actually happens? What do you find yourself up against inevitably?
            </h3>
            
            <h3>
            The judgement &amp; perspectives of other people push us into constant reflection,
            causing us to Think things over, to Analyze our actions, leading to procrastination and a 
            lack of real follow through so that your Vision never really sees the light of day.
            </h3>
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
