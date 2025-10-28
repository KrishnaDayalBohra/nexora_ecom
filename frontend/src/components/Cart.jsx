export default function Cart({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Empty cart 😢</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name} × {item.qty}</p>
            <p>₹{item.price * item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
