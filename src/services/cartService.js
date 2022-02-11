import { useState } from 'react';

const persistToLocalStorage = (cartItems) => {
  let json = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', json);
};

const retrieveFromLocalStorage = () => {
  const cartItems = localStorage.getItem('cartItems');
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return null;
};

const useAddCartItem = () => {
  const [cartItems, setCartItems] = useState(retrieveFromLocalStorage() || []);

  function addCartItem(item) {
    const result = cartItems.findIndex((i) => {
      return i.id === item.id && i.size === item.size;
    });

    if (result > -1) {
      cartItems[result].quantity = item.quantity;
      setCartItems(cartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  }

  persistToLocalStorage(cartItems);

  return [cartItems, addCartItem];
};

const useDeleteCartItem = () => {
  const [cartItems, setCartItems] = useState(retrieveFromLocalStorage() || []);

  function deleteCartItem(index) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems([...newCartItems]);
  }
  persistToLocalStorage(cartItems);

  return [cartItems, deleteCartItem];
};

const useGetCartItems = () => {
  return retrieveFromLocalStorage();
};

export { useAddCartItem, useDeleteCartItem, useGetCartItems };
