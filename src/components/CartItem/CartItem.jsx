import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import SelectSize from '../SelectSize/SelectSize'
import './CartItem.scss'
import { useDispatch } from 'react-redux'
import { updateCard } from '../../store/cartSlice'

function CartItem ({ item, deleteItem, onChange }) {
  const dispatch = useDispatch()

  const [size, setSize] = useState(item.size)

  const handleChange = e => {
    const quantity = parseInt(e.target.value)
    const subTotal = item.price * quantity

    dispatch(updateCard({ item, quantity, subTotal }))
  }

  const transformCurrency = currency => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <tr>
      <td>
        <img className='cart-image' src={item.image} alt={item.name} />
      </td>
      <td className='table-item'>{item.name}</td>
      <td>
        <input
          type='number'
          className='product-quantity'
          min='1'
          defaultValue={item.quantity}
          onChange={e => handleChange(e)}
        />
      </td>
      <td>
        <SelectSize option={size} onChange={setSize} />
      </td>
      <td className='table-item'>{transformCurrency(item.price)}</td>
      <td className='table-item'>
        {transformCurrency(item.price * item.quantity)}
      </td>
      <td className='delete-section'>
        <IoMdClose className='delete-btn' onClick={() => deleteItem(item)} />
      </td>
    </tr>
  )
}

export default CartItem
