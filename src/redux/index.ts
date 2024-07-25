import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import requestApiReducer from './reducers/requestApiReducer';

const reducer = combineReducers({
  requestApiReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
