import { products } from "../data";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const FILTER_VALUE = "FILTER_VALUE";
const FILTER_DELETE = "FILTER_DELETE";

const SORT_PRODUCTS = "SORT_PRODUCTS";
const SORT_VALUE = "SORT_VALUE";

export const filterValue = (value) => {
  return { type: FILTER_VALUE, payload: value };
};

export const filterDelete = () => {
  return { type: FILTER_DELETE };
};

export const filterProduct = (value) => {
  return { type: FILTER_PRODUCTS, payload: value };
};

export const sortProduct = (value) => {
  return { type: SORT_PRODUCTS, payload: value };
};

export const sortValue = (value) => {
  return { type: SORT_VALUE, payload: value };
};

const initState = {
  productList: products,
  filterItem: {
    size: "",
    price: 1000000,
  },
  sort: "low",
  total: [],
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      return filterProductHandler(state, action);
    case FILTER_VALUE:
      return { ...state, filterItem: action.payload };
    case SORT_PRODUCTS:
      return sortProductHandler(state, action);
    case SORT_VALUE:
      return { ...state, sort: action.payload };
    case FILTER_DELETE:
      return { ...initState, sort: state.sort };
    default:
      return state;
  }
};

const filterProductHandler = (state, action) => {
  if (!action.payload) action.payload = state.filterItem;
  const total = totalHandler(action);
  const filteredPrice = products.filter((item) => {
    return item.offPrice <= action.payload.price;
  });
  const filteredSize = filteredPrice.filter((item) => {
    if (action.payload.size === initState.filterItem.size) {
      return products;
    }
    return item.size.find((s) => parseInt(s) === parseInt(action.payload.size));
  });
  return { ...state, productList: filteredSize, total };
};

const totalHandler = (action) => {
  let total = [];
  if (action.payload.price !== initState.filterItem.price)
    total = [...total, "price"];
  if (action.payload.size !== initState.filterItem.size)
    total = [...total, "size"];
  return total;
};

const sortProductHandler = (state, action) => {
  if (!action.payload) action.payload = state.sort;
  switch (action.payload) {
    case "all": {
      return state;
    }
    case "high": {
      const clone = [...state.productList];
      const sorted = clone.sort((a, b) => {
        return b.offPrice - a.offPrice;
      });
      return { ...state, productList: sorted };
    }

    case "low": {
      const clone = [...state.productList];
      const sorted = clone.sort((a, b) => {
        return a.offPrice - b.offPrice;
      });
      return { ...state, productList: sorted };
    }

    case "star": {
      const clone = [...state.productList];
      const sorted = clone.sort((a, b) => {
        return b.star - a.star;
      });
      return { ...state, productList: sorted };
    }

    case "fast": {
      const clone = [...state.productList];
      const sorted = clone.sort((a, b) => {
        return b.fast - a.fast;
      });
      return { ...state, productList: sorted };
    }

    default:
      return state;
  }
};
