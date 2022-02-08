import React from 'react';
import Header from '../../components/Header/Header';
import CartList from '../../components/CartList/CartList';
import Footer from '../../components/Footer/Footer';

function Cart() {
  return (
    <div className="container">
      <Header />
      <CartList />
      <Footer />
    </div>
  );
}

export default Cart;
