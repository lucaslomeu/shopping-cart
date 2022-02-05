import React from 'react';
import './Header.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { FiUser } from 'react-icons/fi';

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
        <input
          type="search"
          className="nav-subitem"
          placeholder="Digite sua busca..."
        ></input>
        <div className="nav-subitem nav-user">
          <FiUser />
        </div>
        <div className="nav-subitem nav-cart">
          <AiOutlineShoppingCart /> (0)
        </div>
      </div>
    </header>
  );
};

export default Header;
