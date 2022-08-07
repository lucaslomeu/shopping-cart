import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import SelectSize from '../SelectSize/SelectSize'
import './CartItem.scss'

function CartItem ({ item, deleteItem, onChange, cartItemIndex }) {
  const [size, setSize] = useState(item.size)
  const [quantity, setQuantity] = useState(item.quantity)
  const [subTotal, setSubTotal] = useState(item.price * item.quantity)

  const handleChange = e => {
    const value = parseInt(e.target.value)
    setQuantity(value)
    const subTotalValue = value * item.price
    setSubTotal(subTotalValue)
    item.quantity = value
  }

  // useEffect(() => {
  //   onChange({ ...item });
  // }, []);

  const transformCurrency = currency => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <tr onChange={() => onChange({ ...item })}>
      <td scope='row'>
        <img className='cart-image' src={item.image} alt={item.name} />
      </td>
      <td className='table-item'>{item.name}</td>
      <td>
        <input
          type='number'
          className='product-quantity'
          min='1'
          defaultValue={quantity}
          // onChange={(e) => handleChange(e)}
        />
      </td>
      <td>
        <SelectSize option={size} onChange={setSize} />
      </td>
      <td className='table-item'>{transformCurrency(item.price)}</td>
      <td className='table-item'>{transformCurrency(subTotal)}</td>
      <td className='delete-section'>
        <IoMdClose
          className='delete-btn'
          onClick={() => deleteItem(cartItemIndex)}
        />
      </td>
    </tr>
  )
}

export default CartItem
