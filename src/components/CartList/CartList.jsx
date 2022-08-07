import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartList.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/cartSlice'

const CartList = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const DeleteFromCart = item => {
    if (window.confirm('Deseja excluir esse item?') === true) {
      dispatch(removeFromCart(item))
    }
  }

  const handleContinueToCart = () => {
    navigate('/')
  }

  const finalTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  const transformCurrency = currency => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div className='cart-container'>
      {cart.length !== 0 ? (
        <div className='cart'>
          <div className='cart-display'>
            <div className='cart-list'>
              <div className='cart-table'>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>PRODUTO</th>
                      <th>UN</th>
                      <th>TAM</th>
                      <th>VALOR UNIT</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, key) => (
                      <CartItem
                        item={item}
                        key={key}
                        deleteItem={item => DeleteFromCart(item)}
                        cartItemIndex={key}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='cart-subtotal'>
            <div className='subtotal-info'>
              <div className='subtotal-title'>Total no carrinho</div>
              <div className='subtotal-price'>
                <div className='subtotal-price-text'>
                  Subtotal: {transformCurrency(finalTotal)}
                </div>
              </div>
            </div>
            <div className='subtotal-adress'>
              <input
                type='text'
                className='zip-code'
                placeholder='Digite seu CEP'
              />
              <Button
                textBtn='Atualizar'
                onClick={() => alert('Valor do frete adicionado a compra.')}
              />
            </div>
            <div className='subtotal-final'>
              <div className='subtotal-final-total'>
                <div className='total-text'>
                  Total: {transformCurrency(finalTotal)}
                </div>
                <div className='total-price'>
                  <div className='price'></div>
                  <div className='price-portion'>
                    {/* ou até 3x de {transformCurrency(finalTotal / 3)} */}
                  </div>
                </div>
              </div>
              <Button
                textBtn='Finalizar compra'
                onClick={() => alert('Compra finalizada!')}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='cart-empty'>
          <div className='cart-warning'>O seu carrinho está vazio.</div>
          <div className='cart-sugestion'>
            Deseja olhar outros produtos similares?
          </div>
          <Button
            textBtn='CONTINUAR COMPRANDO'
            onClick={handleContinueToCart}
          />
        </div>
      )}
    </div>
  )
}

export default CartList
