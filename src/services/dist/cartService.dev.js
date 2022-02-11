"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetCartItems = exports.useDeleteCartItem = exports.useAddCartItem = void 0;

var _react = require("react");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persistToLocalStorage = function persistToLocalStorage(cartItems) {
  var json = JSON.stringify(cartItems);
  localStorage.setItem('cartItems', json);
};

var retrieveFromLocalStorage = function retrieveFromLocalStorage() {
  var cartItems = localStorage.getItem('cartItems');

  if (cartItems) {
    return JSON.parse(cartItems);
  }

  return null;
};

var useAddCartItem = function useAddCartItem() {
  var _useState = (0, _react.useState)(retrieveFromLocalStorage() || []),
      _useState2 = _slicedToArray(_useState, 2),
      cartItems = _useState2[0],
      setCartItems = _useState2[1];

  function addCartItem(item) {
    var result = cartItems.findIndex(function (i) {
      return i.id === item.id && i.size === item.size;
    });

    if (result > -1) {
      cartItems[result].quantity = item.quantity;
      setCartItems(cartItems);
    } else {
      setCartItems([].concat(_toConsumableArray(cartItems), [item]));
    }
  }

  persistToLocalStorage(cartItems);
  return [cartItems, addCartItem];
};

exports.useAddCartItem = useAddCartItem;

var useDeleteCartItem = function useDeleteCartItem() {
  var _useState3 = (0, _react.useState)(retrieveFromLocalStorage() || []),
      _useState4 = _slicedToArray(_useState3, 2),
      cartItems = _useState4[0],
      setCartItems = _useState4[1];

  function deleteCartItem(item) {
    // const newCartItems = cartItems.splice(index, 1);
    var newCartItems = cartItems.filter(function (e, index) {
      return item.id !== index;
    });
    setCartItems(newCartItems);
  }

  persistToLocalStorage(cartItems);
  return [cartItems, deleteCartItem];
};

exports.useDeleteCartItem = useDeleteCartItem;

var useGetCartItems = function useGetCartItems() {
  return retrieveFromLocalStorage();
};

exports.useGetCartItems = useGetCartItems;