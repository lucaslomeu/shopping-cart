import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductsList/ProductsList';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductsList />
    </>
  );
};

export default Home;
