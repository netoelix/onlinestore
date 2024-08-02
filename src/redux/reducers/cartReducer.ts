import { REMOVE_FROM_CART } from '../actions/cartActions';

const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
  itemIds: [] as number[],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        itemIds: state.itemIds.filter((id) => id !== action.payload),
      };
    case ADD_TO_CART:
      return { ...state, itemIds: [...state.itemIds, action.payload] };
    default:
      return state;
  }
};

export const addToCart = (id: number) => ({
  type: ADD_TO_CART,
  payload: id,
});

export default cartReducer;
