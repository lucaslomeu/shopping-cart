import React, { useState } from 'react';
import Button from '../Button/Button';
import InputQuantity from '../InputQuantity/InputQuantity';
import SelectSize from '../SelectSize/SelectSize';

import './Modal.scss';
import { useAddCartItem } from '../../services/cartService';

import { useNavigate } from 'react-router-dom';

const Modal = ({
  id = 'modal',
  onClose = () => {},
  onClick = () => {},
  productDatabase,
}) => {
  let navigate = useNavigate();
  const [_, addCartItem] = useAddCartItem();
  const [size, setSize] = useState('p');
  const [quantity, setQuantity] = useState(0);

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const AddToCart = () => {
    addCartItem(productDatabase);
    navigate('/');
  };

  const BuyProduct = () => {
    addCartItem(productDatabase);
    navigate('/cart');
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

            <div className="product-AddToCart">
              <Button textBtn="Comprar" onClick={() => BuyProduct()} />
              <Button
                textBtn="Adicionar ao carrinho"
                onClick={() => AddToCart()}
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
