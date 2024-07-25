// src/thunks/requestItemsThunk.ts
import { Dispatch } from 'redux';
import { requestItems, requestItemsSuccess,
  requestItemsFailure } from '../redux/actions/requestItemsAction';

export const fetchItemsByCategory = (categoryId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestItems());
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const data = await response.json();
      dispatch(requestItemsSuccess(data.results));
    } catch (error) {
      dispatch(requestItemsFailure(error));
    }
  };
};
