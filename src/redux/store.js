import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { nextCartReducer } from "./nextCartReducer";

const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  cart: cartReducer,
  nextCart: nextCartReducer,
});

const store = createStore(reducer, middleware);

export default store;
