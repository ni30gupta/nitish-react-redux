const initialCat = [];

const products = (state = initialCat, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    case "FILTER_PRODUCT":
      // let copyData = { ...state };
      return action.payload;

    default:
      return state;
  }
};

export default products;
