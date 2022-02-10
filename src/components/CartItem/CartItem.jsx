import React, { useEffect, useState } from 'react';
import SelectSize from '../SelectSize/SelectSize';
import './CartItem.scss';
import { IoMdClose } from 'react-icons/io';

function CartItem({ item, deleteItem, cartIndex, onChange }) {
  const [size, setSize] = useState(item.size);
  const [quantity, setQuantity] = useState(item.quantity);
  const [subTotal, setSubTotal] = useState(
    (item.price * item.quantity).toFixed(2),
  );

  const calculateItem = (item) => item.quantity * item.price;

  const handleChange = (e) => {
    const value = parseInt(e);
    setQuantity(value);
    const subTotalValue = calculateItem({ ...item }).toFixed(2);
    setSubTotal(subTotalValue);
  };

  useEffect(() => {
    onChange({ [item.name]: subTotal });
  }, []);

  return (
    <tr onChange={() => onChange({ [item.name]: subTotal, quantity })}>
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
      <td>{item.price.toFixed(2)}</td>
      <td>{subTotal}</td>
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
