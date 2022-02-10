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
    const result = cartItems.findIndex((i) => {
      return i.id === item.id && i.size === item.size;
    });
    if (result === -1) {
      setCartItems([...cartItems, item]);
    } else {
      cartItems[result].quantity++;
      setCartItems(cartItems);
    }
  }

  persistToLocalStorage(cartItems);

  return [cartItems, addCartItem];
};

const useUpdateCartItem = () => {
  const [cartItems, setCartItems] = useState(retrieveFromLocalStorage() || []);

  function updateCartItem(cartItemIndex, newCartItem) {
    cartItems[cartItemIndex] = newCartItem;
    setCartItems(cartItems);
  }
  persistToLocalStorage(cartItems);

  return [cartItems, updateCartItem];
};

const useDeleteCartItem = () => {
  const [cartItems, setCartItems] = useState(retrieveFromLocalStorage() || []);

  function deleteCartItem(cartItemIndex) {
    // const newCartItems = cartItems.filter(
    //   (_, index) => cartItemIndex !== index,
    // );
    const newCartItems = cartItems.splice(cartItemIndex, 1);
    setCartItems(newCartItems);
    console.log(cartItemIndex);
  }
  persistToLocalStorage(cartItems);

  return [cartItems, deleteCartItem];
};

const useGetCartItems = () => {
  return retrieveFromLocalStorage();
};

export {
  useAddCartItem,
  useDeleteCartItem,
  useGetCartItems,
  useUpdateCartItem,
};
