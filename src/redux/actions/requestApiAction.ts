export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
export const REQUEST_CATEGORY_SUCCESS = 'REQUEST_CATEGORY_SUCCESS';
export const REQUEST_CATEGORY_FAILURE = 'REQUEST_CATEGORY_FAILURE';

export const requestCategory = () => ({
  type: REQUEST_CATEGORY,
});

export const requestCategorySuccess = (categories: any) => ({
  type: REQUEST_CATEGORY_SUCCESS,
  payload: categories,
});

export const requestCategoryFailure = (error: any) => ({
  type: REQUEST_CATEGORY_FAILURE,
  payload: error,
});
