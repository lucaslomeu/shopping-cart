import React, { useState } from 'react';
import data from '../../storage';
import Modal from '../Modal/Modal';
import './ProductsList.scss';
import { AiOutlinePlusCircle, AiOutlineBars } from 'react-icons/ai';

const ProductsList = () => {
  const { products } = data;
  const [item, setItem] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sort, setSort] = useState('asc');

  const sortBy = () => {
    if (sort === 'asc') {
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      setSort('desc');
    } else {
      setSort('asc');
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
  };

  const transformCurrency = (currency) => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="product-container">
      <div className="products">
        <div className="product-header">
          <div className="product-type">Camisetas</div>
          <div className="header-side">
            <div className="product-display">
              <AiOutlineBars />
            </div>
            <select className="product-filter" onChange={() => sortBy()}>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>
        </div>
        <div className="products-list">
          {products.map((product, idKey) => (
            <div key={idKey} className="product-item">
              <div className="section-img">
                <img className="product-img" src={product.image} />
                <div
                  className="product-overlay"
                  onClick={() => {
                    setIsModalVisible(true);
                    setItem({ product });
                  }}
                >
                  <div className="btn-img">
                    <AiOutlinePlusCircle />
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-price">
                  {transformCurrency(product.price)}
                </div>
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
