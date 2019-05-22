import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Coaching from '@sections/Coaching';

import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Coaching />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
