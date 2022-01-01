import { fetchBookings } from "../../api/index";
import moment from "moment";

export const getBookings = (sort) => async (dispatch) => {
  try {
    const { data } = await fetchBookings(sort);
    
    data.map((bookings) => {
      bookings.startDate = moment(bookings.startDate, "YYYY-MM-DD-HH-mm").toDate();
      bookings.endDate = moment(bookings.endDate, "YYYY-MM-DD-HH-mm").toDate();
    });
    
    dispatch({ type: "FETCH_BOOKINGS", payload: data });
  } catch (error) {
    console.log(error);
  }
};