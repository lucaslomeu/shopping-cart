import React, { useState } from 'react';
import Button from '../Button/Button';
import InputQuantity from '../InputQuantity/InputQuantity';
import SelectSize from '../SelectSize/SelectSize';

import './Modal.scss';

import { useNavigate } from 'react-router-dom';

const Modal = ({
  id = 'modal',
  onClose = () => {},
  onClick = () => {},
  productDatabase,
}) => {
  let navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState('p');
  const [quantity, setQuantity] = useState(0);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    navigate('/', { state: item });
    console.log(cart);
  };

  const buyProduct = (item) => {
    navigate('/cart', { state: item });
  };

  return (
    <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal" onClick={onClick}>
        <div className="modal-content">
          <div className="modal-left-side">
            <img
              className="modal-img"
              src={productDatabase.image}
              alt={productDatabase.name}
            />
          </div>
          <div className="modal-right-side">
            <div className="general">
              <div className="general-information">
                <div className="product-name">{productDatabase.name}</div>
                <div className="product-price">
                  R${productDatabase.price},00
                </div>
                <div className="product-portion">
                  ou até 3x de R$ {productDatabase.price / 3},00
                </div>
              </div>
              <div className="cart-info">
                <InputQuantity quantity={(e) => setQuantity(e.target.value)} />
                <SelectSize size={(e) => console.log(e.target.value)} />
              </div>
            </div>

            <div className="product-addToCart">
              <Button textBtn="Comprar" onClick={() => buyProduct()} />
              <Button
                textBtn="Adicionar ao carrinho"
                onClick={() => addToCart()}
              />
            </div>
            <div className="product-information">
              <div className="information-title">Detalhes do produto</div>
              {productDatabase.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
