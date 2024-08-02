export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
