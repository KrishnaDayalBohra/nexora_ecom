import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductGrid({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing)
      setCart(cart.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
    else
      setCart([...cart, { ...product, qty: 1 }]);
  };

  return (
    <div className="grid">
      {products.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
