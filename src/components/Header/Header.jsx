import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

import './Header.scss';
import CartCount from '../CartCount/CartCount';
import { useGetCartItems } from '../../services/cartService';
import InputSearch from '../InputSearch/InputSearch';

const Header = ({ onClick }) => {
  const cartItems = useGetCartItems();

  return (
    <header className="navbar">
      <div className="nav-itens">
        <div className="nav-subitem">Camiseta</div>
        <div className="nav-subitem">Boné</div>
        <div className="nav-subitem">Tênis</div>
      </div>
      <Link to="/" className="nav-title">
        LomeuShop
      </Link>
      <div className="nav-itens">
        <InputSearch onClick={onClick} />
        <div className="nav-subitem nav-user">
          <FiUser />
        </div>
        <Link to="/cart">
          <CartCount cartCount={cartItems} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
