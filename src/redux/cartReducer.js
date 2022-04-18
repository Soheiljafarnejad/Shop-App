const ADD_TO_CART = "ADD_TO_CART";
const DELETE_CART = "DELETE_CART";
const DECREMENT_CART = "DECREMENT_CART";
const INCREMENT_CART = "INCREMENT_CART";
const CHANGE_CART = "CHANGE_CART";
const TOTAL = "TOTAL";

export const addCart = (data, size) => {
  return { type: ADD_TO_CART, payload: data, size };
};
export const deleteCart = (data) => {
  return { type: DELETE_CART, payload: data };
};
export const decrementCart = (data) => {
  return { type: DECREMENT_CART, payload: data };
};
export const incrementCart = (data) => {
  return { type: INCREMENT_CART, payload: data };
};
export const changeCart = (data) => {
  return { type: CHANGE_CART, payload: data };
};
export const totalCart = () => {
  return { type: TOTAL };
};

const initState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  discount: 0,
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addCartHandler(state, action);
    case DELETE_CART:
      return deleteHandler(state, action);
    case DECREMENT_CART:
      return decrementHandler(state, action);

    case INCREMENT_CART:
      return incrementHandler(state, action);
    case CHANGE_CART:
      return changeDataHandler(state, action);

    case TOTAL:
      return totalHandler(state);
    default:
      return state;
  }
};

const totalHandler = (state) => {
  const totalPrice = state.cart.reduce((total, item) => {
    return total + item.offPrice * item.quantity;
  }, initState.totalPrice);

  const totalQuantity = state.cart.reduce((total, item) => {
    return total + item.quantity;
  }, initState.totalQuantity);

  const discount = state.cart.reduce((total, item) => {
    return total + (item.price - item.offPrice) * item.quantity;
  }, initState.discount);

  return { ...state, totalPrice, totalQuantity, discount };
};

const addCartHandler = (state, action) => {
  const index = state.cart.findIndex((item) => item.id === action.payload.id);
  if (index < 0) {
    const newCart = {
      ...action.payload,
      quantity: 1,
      size: parseInt(action.size),
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
    return deleteHandler(state, action);
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

const deleteHandler = (state, action) => {
  const filtered = state.cart.filter((item) => item.id !== action.payload.id);
  return { ...state, cart: filtered };
};
