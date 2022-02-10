export const changeNavButton = (button) => async (dispatch) => {
  dispatch({ type: "CHANGE_NAV_BUTTON", payload: button });
};

export const changeSortingButton = (button) => async (dispatch) => {
  dispatch({ type: "CHANGE_SORTING_BUTTON", payload: button });
};
