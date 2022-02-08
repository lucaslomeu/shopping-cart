import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Header.scss';
import CartCount from '../CartCount/CartCount';
import { useGetCartItems } from '../../services/cartService';
import InputSearch from '../InputSearch/InputSearch';
import ShippingFree from '../../components/ShippingFree/ShippingFree';

const Header = ({ onClick, onChange }) => {
  const cartItems = useGetCartItems();

  return (
    <header className="navbar">
      <ShippingFree active={true} />
      <div className="nav">
        <div className="nav-items">
          <Link to="/" className="nav-subitem">
            Camiseta
          </Link>
          <Link to="/" className="nav-subitem">
            Boné
          </Link>
          <Link to="/" className="nav-subitem">
            Tênis
          </Link>
        </div>
        <Link to="/" className="nav-title">
          LomeuShop
        </Link>
        <div className="nav-items">
          <InputSearch onClick={onClick} onChange={onChange} />
          <div className="nav-subitem nav-user">
            <FiUser />
          </div>
          <Link to="/cart">
            <CartCount cartCount={cartItems} />
          </Link>
        </div>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
