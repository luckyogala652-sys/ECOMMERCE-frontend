
import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>JohnWills MiniMart</Link>
      <Link to='/cart' className='cart'>
        🛒 Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;