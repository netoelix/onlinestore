// src/actions/requestItemsAction.ts
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const REQUEST_ITEMS_SUCCESS = 'REQUEST_ITEMS_SUCCESS';
export const REQUEST_ITEMS_FAILURE = 'REQUEST_ITEMS_FAILURE';

export const requestItems = () => ({
  type: REQUEST_ITEMS,
});

export const requestItemsSuccess = (items: any) => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload: items,
});

export const requestItemsFailure = (error: any) => ({
  type: REQUEST_ITEMS_FAILURE,
  payload: error,
});
