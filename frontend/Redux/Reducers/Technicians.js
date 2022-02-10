const initialState = {
  technicians: [],
  singleTechnician: [],
};

export const technicians = (technicians = initialState.technicians, action) => {
  switch (action.type) {
    case "FETCH_TECHNICIANS":
      return action.payload;
    default:
      return technicians;
  }
};

export const singleTechnician = (
  technician = initialState.singleTechnician,
  action
) => {
  switch (action.type) {
    case "FETCH_SINGLE_TECHNICIAN":
      return action.payload;
    default:
      return { ...technician };
  }
};
