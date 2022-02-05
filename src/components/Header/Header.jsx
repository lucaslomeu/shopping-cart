import React, { useState } from 'react';
import './Header.scss';
import { FiUser } from 'react-icons/fi';
import Cart from '../../components/Cart/Cart';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="navbar">
      <div className="nav-itens">
        <div className="nav-subitem">Camiseta</div>
        <div className="nav-subitem">Boné</div>
        <div className="nav-subitem">Tênis</div>
      </div>
      <div className="nav-title">SHOPPING</div>
      <div className="nav-itens">
        <input
          type="search"
          className="nav-subitem"
          placeholder="Digite sua busca..."
        ></input>
        <div className="nav-subitem nav-user">
          <FiUser />
        </div>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
