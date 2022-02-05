import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Products from '../../components/Products/Products';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
