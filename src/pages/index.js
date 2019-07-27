import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';


import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>   
    <Navbar />
    <Header/>
    <Footer />
  </Layout>
);

export default IndexPage;
