import products from "../data/products.js";

let cart = [];

export const addToCart = (req, res) => {
  const { productId } = req.body;
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    res.json(cart);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const getCartItems = (req, res) => {
  res.json(cart);
};

export const clearCart = (req, res) => {
  cart = [];
  res.json({ message: "Cart cleared successfully" });
};
