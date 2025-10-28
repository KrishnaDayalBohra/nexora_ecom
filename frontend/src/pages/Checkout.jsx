import React, { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // ✅ calculate total whenever cartItems change
  useEffect(() => {
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1),
      0
    );
    setTotal(totalAmount);
  }, [cartItems]);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all details before confirming your order.");
      return;
    }

    const receipt = `
🧾 Order Receipt
-----------------------
Name: ${formData.name}
Email: ${formData.email}
Total: ₹${total.toFixed(2)}
Date: ${new Date().toLocaleString()}
-----------------------
Thank you for your order! ❤️
    `;

    alert(receipt);
    clearCart();
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity || 1}</p>
                </div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <h3 className="total">Total: ₹{total.toFixed(2)}</h3>

          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="submit">Confirm Order</button>
          </form>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
