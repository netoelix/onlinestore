export const SET_CATEGORY_ID = 'SET_CATEGORY_ID';
export const SET_SEARCH_ITEM = 'SET_SEARCH_ITEM';

export const setCategoryId = (categoryId) => {
  return {
    type: SET_CATEGORY_ID,
    payload: categoryId,
  };
};

export const setSearchItem = (searchItem) => {
  return {
    type: SET_SEARCH_ITEM,
    payload: searchItem,
  };
};
