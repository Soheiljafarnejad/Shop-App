import { products } from "../data";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const filtered = (value) => {
  return { type: FILTER_PRODUCTS, payload: value };
};

const initState = {
  productList: products,
  filterItem: [],
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return filterHandler(state, action);
    default:
      return state;
  }
};

const filterHandler = (state, action) => {
  let filterItem = [];
  const filteredPrice = products.filter((item) => {
    return item.offPrice <= action.payload.price;
  });
  if (action.payload.price !== 1500000) filterItem = [...filterItem, "price"];
  const filteredSize = filteredPrice.filter((item) => {
    if (action.payload.size === "") {
      return products;
    }
    return item.size.find((s) => parseInt(s) === parseInt(action.payload.size));
  });
  if (action.payload.size !== "") filterItem = [...filterItem, "size"];
  return { ...state, productList: filteredSize, filterItem };
};
