import React, { useState } from 'react';
import data from '../../storage';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import './Products.scss';

import {
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineBars,
} from 'react-icons/ai';

const Products = ({ onClick }) => {
  const { products } = data;
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  console.log(cart);

  return (
    <div className="container">
      <div className="products">
        <div className="product-header">
          <div className="product-type">Camisetas</div>
          <div className="header-side">
            <div className="product-display">
              <AiOutlineBars />
            </div>
            <select className="product-filter">
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
          </div>
        </div>
        <div className="products-list">
          {products.map((product) => (
            <div className="product-item">
              <div className="section-img">
                <img className="product-img" src={product.image} />
                <div className="product-overlay">
                  <div className="btn-img">
                    <AiOutlinePlusCircle
                      onClick={() => {
                        setIsModalVisible(true);
                        setItem({ product });
                      }}
                    />
                  </div>
                  <div className="btn-img">
                    <AiOutlineShoppingCart onClick={() => addToCart(product)} />
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
          {isModalVisible && (
            <Modal onClose={() => setIsModalVisible(false)}>
              <div className="modal-content">
                <img
                  className="modal-img"
                  src={item.product.image}
                  alt={item.product.name}
                />
                {item.product.name}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;