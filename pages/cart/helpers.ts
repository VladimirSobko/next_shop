import { getCartCount } from "../../components/Layout/helpers";

export const composeOrder = (cart, goods) => {
  const sum = getCartCount(cart);
  if (cart && goods) {
    return { sum };
  }
};
