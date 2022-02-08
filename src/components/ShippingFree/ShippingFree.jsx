import React from 'react';
import './ShippingFree.scss';

const ShippingFree = ({ active }) => {
  return active ? (
    <div className="shipping">
      Frete gratis para compras acima de R$100 apenas hoje!
    </div>
  ) : null;
};

export default ShippingFree;
