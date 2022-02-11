import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import SelectSize from '../SelectSize/SelectSize';
import './CartItem.scss';

function CartItem({ item, deleteItem, cartIndex, onChange }) {
  const [size, setSize] = useState(item.size);
  const [quantity, setQuantity] = useState(item.quantity);
  const [subTotal, setSubTotal] = useState(item.price * item.quantity);

  const handleChange = (e) => {
    const value = parseInt(e);
    setQuantity(value);
    const subTotalValue = value * item.price;
    setSubTotal(subTotalValue);
  };

  useEffect(() => {
    onChange({ name: item.name, subTotal, quantity });
  }, []);

  const transformCurrency = (currency) => {
    return currency.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <tr onChange={() => onChange({ name: item.name, subTotal, quantity })}>
      <td scope="row">
        <img className="cart-image" src={item.image} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>
        <input
          type="number"
          className="product-quantity"
          min="1"
          defaultValue={quantity}
          onChange={(e) => handleChange(e.target.value)}
        />
      </td>
      <td>
        <SelectSize option={size} onChange={setSize} />
      </td>
      <td>{transformCurrency(item.price)}</td>
      <td>{transformCurrency(subTotal)}</td>
      <td className="delete-section">
        <IoMdClose
          className="delete-btn"
          onClick={() => {
            deleteItem(cartIndex);
          }}
        />
      </td>
    </tr>
  );
}

export default CartItem;
