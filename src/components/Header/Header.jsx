import React from 'react';
import { useGetCartItems } from '../../services/cartService';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import InputSearch from '../InputSearch/InputSearch';
import ShippingFree from '../../components/ShippingFree/ShippingFree';
import './Header.scss';

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
            <AiOutlineShoppingCart className="cartCount" />
          </Link>
        </div>
      </div>
      <div className="mobile-cart">
        <Link to="/" className="nav-title">
          LomeuShop
        </Link>
        <div className="mobile-cart-button">
          <FiUser />
          <Link to="/cart">
            <AiOutlineShoppingCart className="cartCount" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
