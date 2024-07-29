export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchItemSuccess = (item: any) => ({
  type: FETCH_ITEM_SUCCESS,
  payload: item,
});

export const fetchItemFailure = (error: string) => ({
  type: FETCH_ITEM_FAILURE,
  payload: error,
});
