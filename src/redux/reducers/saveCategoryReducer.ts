import { AnyAction } from 'redux';
import { SET_CATEGORY_ID, SET_SEARCH_ITEM } from '../actions/saveCategoryAction';

const initialState = {
  selectedCategoryId: 'MLB1051',
  searchItem: null,
};

const categoryReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        selectedCategoryId: action.payload,
        searchItem: null,
      };
    case SET_SEARCH_ITEM:
      return {
        ...state,
        searchItem: action.payload,
        selectedCategoryId: null,
      };
    default:
      return state;
  }
};

export default categoryReducer;
