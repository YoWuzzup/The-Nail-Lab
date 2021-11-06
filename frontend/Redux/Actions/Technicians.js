import { fetchTechnicians, fetchSingleTechnician } from "../../api/index";

export const getTechnicians = () => async (dispatch) => {
  try {
    const { data } = await fetchTechnicians()

    dispatch({ type: "FETCH_TECHNICIANS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleTechnician = (id) => async (dispatch) => {
  try {
    const { data } = await fetchSingleTechnician(id);

    dispatch({ type: "FETCH_SINGLE_TECHNICIAN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
