import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Coaching from '@sections/Coaching';
import Bookacall from '@sections/Bookacall';
import Facebook from '@sections/Facebook'


const IndexPage = () => (
  <Layout>   
    <Navbar />
    <Header/>
    <Coaching/>
    <Bookacall/>
    <Facebook/>
  </Layout>
);

export default IndexPage;
