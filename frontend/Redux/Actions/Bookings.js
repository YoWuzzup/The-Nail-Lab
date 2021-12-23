import { fetchBookings } from "../../api/index";

export const getBookings = (sort) => async (dispatch) => {
  try {
    const { data } = await fetchBookings(sort);

    dispatch({ type: "FETCH_BOOKINGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
