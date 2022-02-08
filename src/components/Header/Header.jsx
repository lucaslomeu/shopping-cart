import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';

import './Header.scss';
import CartCount from '../CartCount/CartCount';
import { useGetCartItems } from '../../services/cartService';
import InputSearch from '../InputSearch/InputSearch';
import ShippingFree from '../../components/ShippingFree/ShippingFree';

const Header = ({ onClick, onChange }) => {
  const cartItems = useGetCartItems();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="navbar">
      <ShippingFree active={true} />
      <div className="nav">
        <div className="nav-itens">
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
        <div className="nav-itens">
          <InputSearch onClick={onClick} onChange={onChange} />
          <div className="nav-subitem nav-user">
            <FiUser />
          </div>
          <Link to="/cart">
            <CartCount cartCount={cartItems} />
          </Link>
        </div>
        {/* <div className="hamburger" onClick={toggleHamburger}>
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div> */}
      </div>
    </header>
  );
};

export default Header;
