import { Dispatch } from 'redux';
import { requestCategory, requestCategorySuccess,
  requestCategoryFailure } from '../redux/actions/requestApiAction';

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCategory());
    try {
      const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
      const data = await response.json();
      dispatch(requestCategorySuccess(data));
    } catch (error) {
      dispatch(requestCategoryFailure(error));
    }
  };
};
