const initialState = {
  bookings: [],
};

export const bookings = (bookings = initialState.bookings, action) => {
  switch (action.type) {
    case "FETCH_BOOKINGS":
      return [...action.payload];
    default:
      return bookings;
  }
};
