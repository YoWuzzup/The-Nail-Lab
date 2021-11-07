const initialState = {
  checkoutService: {},
  singleService: [],
};

export const checkoutService = (
  checkoutService = initialState.checkoutService,
  action
) => {
  switch (action.type) {
    case "ADD_CHECKOUT_SERVICE":
      return {
        ...checkoutService,
        ...action.payload,
      };
    default:
      return checkoutService;
  }
};
