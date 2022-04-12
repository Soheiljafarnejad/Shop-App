import { createContext, useContext, useReducer } from "react";

const ProductContainerContext = createContext();
const ProductContainerContextDispatcher = createContext();

const Container = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return [...state, action.payload];
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
