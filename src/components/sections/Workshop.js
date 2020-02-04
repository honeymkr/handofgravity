import React from 'react';

import styled from 'styled-components';
import { Section, Container } from '@components/global';

const Workshop = () => (

      <Section id="workshop" accent>
        <Container>
        <Grid>
          
          <div>
          <h1>Being Visionary</h1>
          <h2>Creativity Masterclass</h2>
          <h3>February 19th, 2020 ~ Greenpoint, Brooklyn</h3>
<p>
We know ourselves to be creative yet we struggle to maintain inspiration, vision, and uphold our value at times. What’s important is making our audience, our clients, and our customers happy but this can be difficult when we have doubts or anxiety because we’re trying to get things right and we have a fear of failure.

</p>
<p>
There are plenty of proven strategies out there to follow. However, fitting in to be validated with our wok rips off the audience and dulls our creative edge. Also, where we accept sacrifice as necessary for success, we sell out, leaving ourselves exhausted & frustrated.

</p>
<p>
So, what could you do with an unlimited way of being inspired? What kinds of results could you create with unlimited focus and energy? 
</p>
<p>
‘Being Creative’ is a workshop developed by Hand of Gravity Coaching to train people to expand their creativity, master the art of inspiration, and solve difficult business problems using techniques from the world of product development.
</p>
<p>
Sign up now and bring your problems to the table. We are going to work together as a small group, in person and online, to unleash your vision!

</p>
           

<Button
      href="http://bit.ly/handofgravity"
      target="_blank"
      rel="noopener"
      primary
    >
   Purchase a Ticket
    </Button>


              </div>
         
            
          
          </Grid>
        </Container>
      </Section>
  
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
