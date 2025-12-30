import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

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
      {cart.length > 0 (
        <>
          <h3>Total:{total.toFixed(2)}</h3>
          <button style={{ marginTop: '10px' }}>Pay Now</button>
        </>
      )}
        
    </div>
  );
}
   

export default CartPage;