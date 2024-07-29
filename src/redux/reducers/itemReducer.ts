import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE } from '../actions/itemActions';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

const itemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ITEM_SUCCESS:
      return { ...state, loading: false, item: action.payload };
    case FETCH_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default itemReducer;
