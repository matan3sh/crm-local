import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import ordersReducer from '../store/orders/reducer';
import customersReducer from '../store/customers/reducer';
import productsReducer from '../store/products/reducer';

const rootReducer = combineReducers({
  ordersApp: ordersReducer,
  customersApp: customersReducer,
  productsApp: productsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
