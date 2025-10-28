const generateReceipt = (cartItems) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  return {
    timestamp: new Date().toLocaleString(),
    total,
  };
};

export default generateReceipt;
