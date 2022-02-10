import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ProductsList.scss';
import { AiOutlinePlusCircle, AiOutlineBars } from 'react-icons/ai';

const ProductsList = ({ products }) => {
  const [item, setItem] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sort, setSort] = useState('asc');
  const [dispositionGrid, setDispositionGrid] = useState(true);

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

  const dispositionProducts = () => {
    setDispositionGrid(!dispositionGrid);
  };

  return (
    <div className="product-container">
      <div className="products">
        <div className="product-header">
          <div className="product-type">Camisetas</div>
          <div className="header-side">
            <div className="product-display" onClick={dispositionProducts}>
              <AiOutlineBars />
            </div>
            <select className="product-filter" onChange={() => sortBy()}>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </div>
        </div>
        {dispositionGrid ? (
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
          </div>
        ) : (
          <div className="products-list">
            {products.map((product, idKey) => (
              <div key={idKey} className="product-item-list">
                <div className="section-img-list">
                  <img className="product-img-list" src={product.image} />
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
                <div className="product-info-list">
                  <div className="list-infos">
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">
                      {transformCurrency(product.price)}
                    </div>
                  </div>
                  <div className="product-description">
                    {product.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {isModalVisible && (
          <Modal
            onClose={() => setIsModalVisible(false)}
            productDatabase={item.product}
          ></Modal>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
