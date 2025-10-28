import express from "express";
import generateReceipt from "../utils/generateReceipt.js";

const router = express.Router();
let cart = [];

// Add item
router.post("/", (req, res) => {
  const { productId, qty, name, price, image } = req.body;
  const existing = cart.find((item) => item.productId === productId);
  if (existing) existing.qty += qty;
  else cart.push({ productId, qty, name, price, image });
  res.json(cart);
});

// Get cart + total
router.get("/", (req, res) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  res.json({ cart, total });
});

// Remove item
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.productId !== id);
  res.json(cart);
});

// Checkout
router.post("/checkout", (req, res) => {
  const { cartItems } = req.body;
  const receipt = generateReceipt(cartItems);
  cart = [];
  res.json(receipt);
});

export default router;
