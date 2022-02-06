import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.scss';
import CartList from '../CartList/CartList';

const Header = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <header className="navbar">
      <div className="nav-itens">
        <div className="nav-subitem">Camiseta</div>
        <div className="nav-subitem">Boné</div>
        <div className="nav-subitem">Tênis</div>
      </div>
      <Link to="/" className="nav-title">
        SHOPPING
      </Link>
      <div className="nav-itens">
        <input
          type="search"
          className="nav-subitem"
          placeholder="Digite sua busca..."
        ></input>
        <div className="nav-subitem nav-user">
          <FiUser />
        </div>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
