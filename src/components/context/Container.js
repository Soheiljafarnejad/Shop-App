import { createContext, useContext, useReducer } from "react";

const ProductContainerContext = createContext();
const ProductContainerContextDispatcher = createContext();

const Container = ({ children }) => {
  const initState = {
    cart: [],
    totalPrice: 0,
  };

  const totalPriceHandler = (state) => {
    const totalPrice = state.cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, initState.totalPrice);
    return { ...state, totalPrice: totalPrice };
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
      const filtered = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
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

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return addCartHandler(state, action);

      case "DECREMENT_CART":
        return decrementHandler(state, action);

      case "INCREMENT_CART":
        return incrementHandler(state, action);
      case "TOTAL_PRICE":
        return totalPriceHandler(state);
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(reducer, initState);

  return (
    <ProductContainerContext.Provider value={cart}>
      <ProductContainerContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContainerContextDispatcher.Provider>
    </ProductContainerContext.Provider>
  );
};

export default Container;

export const useCart = () => useContext(ProductContainerContext);

export const useCartActions = () =>
  useContext(ProductContainerContextDispatcher);
