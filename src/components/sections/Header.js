import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

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
              <iframe title="Creativity Now" width="560" height="315" src="https://www.youtube.com/embed/mpTNaciptAs" 
              frameBorder="0" samesite="None" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Art>
           <div>  
             <h1>Visionary Coaching</h1>  
              <h3>
              Creativity is code for Freedom. When we find ourselves limited in
              what we think is possible for our business,
              startup or projects we experience a 
              lack of Freedom and a fear of failure which
              infects our sense of Inspiration, draining our energy with daily 
              anxiety &amp; frustrations. 
             </h3>
             <h3>
               What would it be like to Be unconstrained creatively? What would it be like to have 
               clarity, confidence and inspiration that attracted the right clients &amp; help?
               
             </h3>
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
