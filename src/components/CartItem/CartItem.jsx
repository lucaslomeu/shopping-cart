import React, { useState } from 'react';
import SelectSize from '../SelectSize/SelectSize';
import { IoMdClose } from 'react-icons/io';

function CartItem({ item, deleteItem, cartIndex, onChange2 }) {
  const [size, setSize] = useState(item.size);
  const [quantity, setQuantity] = useState(item.quantity);
  const [subTotal, setSubTotal] = useState(item.price * item.quantity);
  const arr = [];
  let newArr;
  const calculateItem = (item) => item.quantity * item.price;

  const handleChange2 = (item) => {
    arr.push(...item, item);
    console.log(arr);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    const subTotalValue = calculateItem({ ...item, quantity: value });
    setSubTotal(subTotalValue);
    setQuantity(value);
    handleChange2(e.target.value);
  };

  return (
    <tr>
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
          onChange={handleChange}
        />
      </td>
      <td>
        <SelectSize option={size} onChange={setSize} />
      </td>
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
