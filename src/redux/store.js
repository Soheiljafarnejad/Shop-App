import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { nextCartReducer } from "./nextCartReducer";
import { productReducer } from "./productReducer";

const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  cart: cartReducer,
  nextCart: nextCartReducer,
  products: productReducer,
});

const store = createStore(reducer, middleware);

export default store;
