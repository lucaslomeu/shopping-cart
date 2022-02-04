import React, { useState } from 'react';
import data from '../../storage';
import Cart from '../Cart/Cart';
import './Products.scss';

import { AiOutlinePlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  console.log(cart);

  const { products } = data;
  return (
    <div className="container">
      <div className="products">
        <div className="product-header">
          <div className="product-type">Camisetas</div>
          <div className="product-filter">SORT BY</div>
        </div>
        <div className="products-list">
          {products.map((product) => (
            <div className="product-item">
              <div className="section-img">
                <img className="product-img" src={product.image} />
                <div class="product-overlay">
                  <div class="btn-img">
                    <AiOutlinePlusCircle />
                  </div>
                  <div class="btn-img">
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">R${product.price}</div>
                <div className="product-available">
                  {product.availableColors} cores disponíveis
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
