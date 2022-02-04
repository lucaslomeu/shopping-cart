import React from 'react';
import './Header.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-itens">
        <div className="nav-subitem">Camiseta</div>
        <div className="nav-subitem">Boné</div>
        <div className="nav-subitem">Tênis</div>
      </div>
      <div className="nav-title">SHOPPING</div>
      <div className="nav-itens">
        <div className="nav-subitem">Search</div>
        <div className="nav-subitem">Account</div>
        <div className="nav-subitem">
          <AiOutlineShoppingCart /> (0)
        </div>
      </div>
    </header>
  );
};

export default Header;
