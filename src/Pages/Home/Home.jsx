import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import ProductsList from '../../components/ProductsList/ProductsList';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <ProductsList />
    </div>
  );
};

export default Home;
