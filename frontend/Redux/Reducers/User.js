const initialState = {
  user: {},
};

export const user = (user = initialState.user, action) => {
  switch (action.type) {
    case "LOGING_USER":
      return action.payload;
    case "LOGOUT_USER":
      return action.payload;
    default:
      return user;
  }
};
