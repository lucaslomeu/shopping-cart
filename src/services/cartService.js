import { useState } from 'react';

const persistToLocalStorage = (cartItems) => {
  var json = JSON.stringify(cartItems);
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
    setCartItems([...cartItems, item]);
  }
  persistToLocalStorage(cartItems);

  return [cartItems, addCartItem];
};

const useDeleteCartItem = () => {
  const [cartItems, setCartItems] = useState(retrieveFromLocalStorage() || []);

  function deleteCartItem() {
    const itemToDelete = cartItems.splice(1, 1);
    setCartItems(itemToDelete);
  }
  persistToLocalStorage(cartItems);

  return [cartItems, deleteCartItem];
};

const useGetCartItems = () => {
  return retrieveFromLocalStorage();
};

export { useAddCartItem, useDeleteCartItem, useGetCartItems };
