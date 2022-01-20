export const getCartCount = (cart) => {
  let sum;
  if (cart) {
    cart.map((i) => (sum !== undefined ? (sum += i.count) : (sum = i.count)));
  }
  return sum;
};
