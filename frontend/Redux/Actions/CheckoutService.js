export const getCheckoutService = (data) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_CHECKOUT_SERVICE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
