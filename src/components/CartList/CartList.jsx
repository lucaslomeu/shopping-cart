import React, { useEffect, useState } from 'react';
import './CartList.scss';
import {
  useGetCartItems,
  useDeleteCartItem,
  // useUpdateCartItem,
} from '../../services/cartService';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const CartList = () => {
  let navigate = useNavigate();
  const cartItems = useGetCartItems();
  const [_, deleteCartItem] = useDeleteCartItem();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState([]);

  const DeleteFromCart = (item) => {
    if (window.confirm('Deseja excluir esse item?') === true) {
      deleteCartItem(item.id);
    }
  };

  const handleContinueToCart = () => {
    navigate('/');
  };

  // const transformCurrency = (currency) => {
  //   return currency.toLocaleString('pt-br', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   });
  // };

  const totalCart = (item) => {
    return item;
  };

  useEffect(() => {
    if (subTotal.length !== 0) {
      setTotal(
        subTotal.reduce((acc, item) => acc + item.subTotal),
        0,
      );
    }
  }, [subTotal]);

  const handleChange2 = (item) => {
    setSubTotal([...subTotal, item]);
    console.log('subTotal:', subTotal);

    // subTotal.map((item) => {
    //   console.log(item);
    // });
  };

  return (
    <div className="cart-container">
      {cartItems.length !== 0 ? (
        <div className="cart">
          <div className="cart-display">
            <div className="cart-list">
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>PRODUTO</th>
                      <th>UN</th>
                      <th>TAM</th>
                      <th>VALOR UNIT</th>
                      <th>SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, key) => (
                      <CartItem
                        item={item}
                        key={item.id}
                        cartIndex={key}
                        deleteItem={() => DeleteFromCart(item)}
                        onChange={(item) => handleChange2(item)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="cart-subtotal">
            <div className="subtotal-info">
              <div className="subtotal-title">Total no carrinho</div>
              <div className="subtotal-price">
                <div className="subtotal-price-text">
                  Subtotal:
                  {
                    (subTotal.length !== 0 &&
                      subTotal.reduce((acc, item) => acc + item.subTotal),
                    0)
                  }
                </div>
              </div>
            </div>
            <div className="subtotal-adress">
              <input
                type="text"
                className="zip-code"
                placeholder="Digite seu CEP"
              />
              <Button
                textBtn="Atualizar"
                onClick={() => alert('Valor do frete adicionado a compra.')}
              />
            </div>
            <div className="subtotal-final">
              <div className="subtotal-final-total">
                <div className="total-text">Total:</div>
                <div className="total-price">
                  <div className="price"></div>
                  <div className="price-portion">ou até 3x de</div>
                </div>
              </div>
              <Button
                textBtn="Finalizar compra"
                onClick={() => alert('Compra finalizada!')}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="cart-warning">O seu carrinho está vazio.</div>
          <div className="cart-sugestion">
            Deseja olhar outros produtos similares?
          </div>
          <Button
            textBtn="CONTINUAR COMPRANDO"
            onClick={handleContinueToCart}
          />
        </div>
      )}
    </div>
  );
};

export default CartList;
