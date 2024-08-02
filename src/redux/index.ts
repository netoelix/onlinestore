import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import requestApiReducer from './reducers/requestApiReducer';
import categoryReducer from './reducers/saveCategoryReducer';
import itemReducer from './reducers/itemReducer';
import cartReducer from './reducers/cartReducer';
import cartItemsReducer from './reducers/cartItemsReducer';

const reducer = combineReducers({
  requestApiReducer,
  categoryReducer,
  itemReducer,
  cartReducer,
  cartItemsReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
