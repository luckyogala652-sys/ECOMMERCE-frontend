
import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import { CartContext } from '../context/CartContext';

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className='hero'>
        <h2>Welcome to JohnWills MiniMat!</h2>
        <p>Your one‑stop shop for amazing deals</p>
      </div>
      <h3 className='section-title'>Our Products</h3>
      <ProductList addToCart={addToCart} />
    </>
  );
}

export default Home;