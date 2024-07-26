/* eslint-disable sonarjs/no-duplicated-branches */
import { REQUEST_CATEGORY, REQUEST_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAILURE } from '../actions/requestApiAction';
import { REQUEST_ITEMS, REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE } from '../actions/requestItemsAction';

interface State {
  categories: any[];
  items: any[];
  loading: boolean;
  error: any;
}

const initialState: State = {
  categories: [],
  items: [],
  loading: false,
  error: null,
};

const requestApiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_CATEGORY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case REQUEST_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REQUEST_ITEMS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case REQUEST_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default requestApiReducer;
