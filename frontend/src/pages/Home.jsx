import React from "react";
import { useCart } from "../context/cartContext";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const products = [
  { id: "1", name: "Premium T-Shirt", price: 999, image: "https://via.placeholder.com/200" },
  { id: "2", name: "Stylish Hoodie", price: 1999, image: "https://via.placeholder.com/200" },
  { id: "3", name: "Classic Jeans", price: 1499, image: "https://via.placeholder.com/200" },
  { id: "4", name: "Sneakers", price: 2499, image: "https://via.placeholder.com/200" },
  { id: "5", name: "Cap", price: 499, image: "https://via.placeholder.com/200" },
  { id: "6", name: "Formal Shirt", price: 1299, image: "https://via.placeholder.com/200" },
  { id: "7", name: "Watch", price: 2999, image: "https://via.placeholder.com/200" },
  { id: "8", name: "Jacket", price: 3499, image: "https://via.placeholder.com/200" },
  { id: "9", name: "Shorts", price: 899, image: "https://via.placeholder.com/200" },
  { id: "10", name: "Belt", price: 799, image: "https://via.placeholder.com/200" },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <header>
        <h1>Nexora Store</h1>
        <Link to="/checkout" className="cart-link">🛒 Go to Checkout</Link>
      </header>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
