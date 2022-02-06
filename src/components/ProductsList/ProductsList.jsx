import React, { useEffect, useState } from 'react';
import data from '../../storage';
import Modal from '../Modal/Modal';
import './ProductsList.scss';
import {
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineBars,
} from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';
import { useAddCartItem } from '../../services/cartService';

const ProductsList = () => {
  let navigate = useNavigate();
  const { products } = data;
  const [item, setItem] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const BuyProduct = (item) => {
    useAddCartItem(item);
    navigate('/cart');
  };

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
          {products.map((product, idKey) => (
            <div key={idKey} className="product-item">
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
                    <AiOutlineShoppingCart
                      onClick={() => BuyProduct(product)}
                    />
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">R${product.price}</div>
              </div>
            </div>
          ))}
          {isModalVisible && (
            <Modal
              onClose={() => setIsModalVisible(false)}
              productDatabase={item.product}
            ></Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
