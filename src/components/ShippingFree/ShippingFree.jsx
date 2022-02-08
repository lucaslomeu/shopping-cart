import React from 'react';
import './ShippingFree.scss';

const ShippingFree = ({ active }) => {
  return active ? (
    <div className="shipping">
      Frete <span className="free">&nbsp;grátis&nbsp;</span> para compras acima
      de <span className="free">&nbsp;R$100&nbsp;</span> apenas hoje!
    </div>
  ) : null;
};

export default ShippingFree;
