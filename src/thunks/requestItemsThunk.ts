import { Dispatch } from 'redux';
import { requestItems, requestItemsSuccess,
  requestItemsFailure } from '../redux/actions/requestItemsAction';
import { fetchItemFailure, fetchItemRequest,
  fetchItemSuccess } from '../redux/actions/itemActions';

export const fetchItemsByCategory = (categoryId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestItems());
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
      const data = await response.json();
      dispatch(requestItemsSuccess(data));
    } catch (error) {
      dispatch(requestItemsFailure(error));
    }
  };
};

export const fetchItemsBySearch = (itemSearch: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestItems());
    try {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${itemSearch}`);
      const data = await response.json();
      dispatch(requestItemsSuccess(data));
    } catch (error) {
      dispatch(requestItemsFailure(error));
    }
  };
};

export const fetchItemById = (itemId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchItemRequest());
    try {
      const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
      const data = await response.json();
      dispatch(fetchItemSuccess(data));
    } catch (error) {
      dispatch(fetchItemFailure(error as string));
    }
  };
};
