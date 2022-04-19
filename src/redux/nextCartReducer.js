const ADD_TO_NEXT_CART = "ADD_TO_NEXT_CART";
const DECREMENT_NEXT_CART = "DECREMENT_NEXT_CART";
const INCREMENT_NEXT_CART = "INCREMENT_NEXT_CART";
const CHANGE_NEXT_CART = "CHANGE_NEXT_CART";

export const addNextCart = (data) => {
  return { type: ADD_TO_NEXT_CART, payload: data };
};
export const decrementNextCart = (data) => {
  return { type: DECREMENT_NEXT_CART, payload: data };
};
export const incrementNextCart = (data) => {
  return { type: INCREMENT_NEXT_CART, payload: data };
};

export const changeNextCart = (data) => {
  return { type: CHANGE_NEXT_CART, payload: data };
};

const initState = {
  cart: [],
};

export const nextCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_NEXT_CART:
      return addCartHandler(state, action);

    case DECREMENT_NEXT_CART:
      return decrementHandler(state, action);

    case INCREMENT_NEXT_CART:
      return incrementHandler(state, action);

    case CHANGE_NEXT_CART:
      return changeDataHandler(state, action);

    default:
      return state;
  }
};

const addCartHandler = (state, action) => {
  const index = state.cart.findIndex((item) => item.id === action.payload.id);
  if (index < 0) {
    const newCart = {
      ...action.payload,
      quantity: 1,
    };
    return { ...state, cart: [...state.cart, newCart] };
  }
  return state;
};

const decrementHandler = (state, action) => {
  const index = state.cart.findIndex((item) => item.id === action.payload.id);
  const clone = [...state.cart];
  const selectItem = { ...clone[index] };
  if (selectItem.quantity === 1) {
    const filtered = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state, cart: filtered };
  }
  selectItem.quantity = selectItem.quantity - 1;
  clone[index] = selectItem;
  return { ...state, cart: clone };
};

const incrementHandler = (state, action) => {
  const index = state.cart.findIndex((item) => item.id === action.payload.id);
  const clone = [...state.cart];
  const selectItem = { ...clone[index] };
  selectItem.quantity = selectItem.quantity + 1;
  clone[index] = selectItem;
  return { ...state, cart: clone };
};

const changeDataHandler = (state, action) => {
  return { ...state, cart: action.payload };
};
