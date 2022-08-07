// React
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Button from '../Button/Button'
import SelectSize from '../SelectSize/SelectSize'

// Style
import './Modal.scss'

// Redux
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/cartSlice'

const Modal = ({
  id = 'modal',
  onClose = () => {},
  onClick = () => {},
  productDatabase
}) => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleOutsideClick = e => {
    if (e.target.id === id) onClose()
  }

  const addProductToCart = () => {
    dispatch(addToCart(productDatabase))
    // Renderizar alguma notificação que foi adicionado
    // Abrir modal se quer continuar comprando
    // navigate({ state: AddToCart })
  }

  const buyAndRedirect = () => {
    dispatch(addToCart(productDatabase))
    // Adicionar ao carrinho e já redirecionar para a página de checkout
    navigate('/cart')
  }

  const transformCurrency = currency => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div id={id} className='modal-overlay' onClick={handleOutsideClick}>
      <div className='modal' onClick={onClick}>
        <div className='modal-content'>
          <div className='modal-left-side'>
            <img
              className='modal-img'
              src={productDatabase.image}
              alt={productDatabase.name}
            />
          </div>
          <div className='modal-right-side'>
            <div className='general'>
              <div className='general-information'>
                <div className='product-name'>{productDatabase.name}</div>
                <div className='product-price'>
                  {transformCurrency(productDatabase.price)}
                </div>
                <div className='product-portion'>
                  ou até 3x de
                  {transformCurrency(productDatabase.price / 3)}
                </div>
              </div>
              <div className='cart-info'></div>
            </div>
            <div className='product-AddToCart'>
              <Button textBtn='Comprar' onClick={() => buyAndRedirect()} />
              <Button
                textBtn='Adicionar ao carrinho'
                onClick={() => addProductToCart()}
              />
            </div>
            <div className='product-information'>
              <div className='information-title'>Detalhes do produto</div>
              {productDatabase.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
