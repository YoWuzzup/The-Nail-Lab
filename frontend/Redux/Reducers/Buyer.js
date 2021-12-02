const initialState = {
  info: {},
};

export const buyerInfo = (info = initialState.info, action) => {
  switch (action.type) {
    case "GET_BUYER_INFO":
      return {
        ...info,
        ...action.payload,
      };
    default:
      return info;
  }
};
