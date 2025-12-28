import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in your cart yet.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;