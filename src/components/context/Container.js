import { createContext, useContext, useReducer } from "react";

const ProductContainerContext = createContext();
const ProductContainerContextDispatcher = createContext();

const Container = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index < 0) return [...state, { ...action.payload, quantity: 1 }];
        else {
          const clone = [...state];
          const selectItem = { ...clone[index] };
          selectItem.quantity = selectItem.quantity + 1;
          clone[index] = selectItem;
          return clone;
        }
      }
      case "DECREMENT_CART": {
        const index = state.findIndex((item) => item.id === action.payload.id);
        const clone = [...state];
        const selectItem = { ...clone[index] };
        if (selectItem.quantity === 1) {
          const filtered = state.filter(
            (item) => item.id !== action.payload.id
          );
          return filtered;
        }
        selectItem.quantity = selectItem.quantity - 1;
        clone[index] = selectItem;
        return clone;
      }
      case "INCREMENT_CART": {
        const index = state.findIndex((item) => item.id === action.payload.id);
        const clone = [...state];
        const selectItem = { ...clone[index] };
        selectItem.quantity = selectItem.quantity + 1;
        clone[index] = selectItem;
        return clone;
      }

      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(reducer, []);

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
