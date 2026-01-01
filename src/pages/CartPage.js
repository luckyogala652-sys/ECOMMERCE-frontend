import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />

              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="pay-btn">Pay Now</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;