import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { nextCartReducer } from "./nextCartReducer";
import { filterReducer } from "./filterReducer";

const middleware = applyMiddleware(thunk);

const reducer = combineReducers({
  cart: cartReducer,
  nextCart: nextCartReducer,
  filter: filterReducer,
});

const store = createStore(reducer, middleware);

export default store;
