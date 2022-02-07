export const signInUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGING_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT_USER", payload: null });
  } catch (error) {
    console.log(error);
  }
};
