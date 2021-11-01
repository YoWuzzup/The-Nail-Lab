const initialState = {
  service: [],
  singleService: [],
};

export const service = (service = initialState.service, action) => {
  switch (action.type) {
    case "FETCH_SERVICE":
      return action.payload;
    default:
      return service;
  }
};

export const singleService = (service = initialState.singleService, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_SERVICE":
      return action.payload;
    default:
      return { ...service };
  }
};
