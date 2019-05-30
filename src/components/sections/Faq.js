import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Why Coaching Works',
    content: () => (
      <>
        Content Coming Soon.
      </>
    ),
  },
  {
    title: 'How Do We work Together',
    content: () => (
      <>
        Content Coming Soon.
      </>
    ),
  },
  {
    title: 'Payment Methods',
    content: () => (
      <>
        Content Coming Soon.
      </>
    ),
  },
  {
    title: 'More About my Training',
    content: () => (
      <>
        Content Coming Soon.
      </>
    ),
  },
  {
    title: 'Offerings',
    content: () => (
      <>
        Content Coming Soon.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
