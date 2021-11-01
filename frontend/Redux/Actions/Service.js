import { fetchService, fetchSingleService } from "../../api/index";

export const getService = (sort) => async (dispatch) => {
  try {
    const { data } = await fetchService(sort);

    dispatch({ type: "FETCH_SERVICE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleService = (name) => async (dispatch) => {
  try {
    const { data } = await fetchSingleService(name);

    dispatch({ type: "FETCH_SINGLE_SERVICE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
