import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../cart.css';
import { PaystackButton } from "react-paystack";

const publicKey = "pk_live_6eafbca693efa8a357d54482f23083003eba5084"; //replace with paystack public key

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const verifyPayment = async (reference) => {
    const res = await
    fetch(`https://ecommerce-backend-ejce.onrender.com/verify/${reference}`);
    const data = await res.json();

    if (data.data.status === "success") {
      alert("Payment Successful");
    }
  };
  const email = "luckyogala652@gmail.com";

  const componentProps = {
    email,
    amount: total * 100, publicKey,
    text: "Pay Now",
    onSuccess: (response) => 
      verifyPayment(response.reference),
    onClose: () => alert("Payment cancelled"),
  };

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
      <PaystackButton {...componentProps} className="pay-btn" />
    </div>
  </>
)}
    </div>
  );
}

export default CartPage;