export const buyerInfo = (data) => async (dispatch) => {
  await dispatch({ type: "GET_BUYER_INFO", payload: data });
};
