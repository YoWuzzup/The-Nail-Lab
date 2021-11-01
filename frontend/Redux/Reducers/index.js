import { combineReducers } from "redux";

// Reducers
import { navigationButton, sortingButton } from "./Buttons";
import { service, singleService } from "./Service";

export default combineReducers({
  navigationButton,
  sortingButton,
  service,
  singleService,
});
