import { combineReducers } from "redux";

// Reducers
import { navigationButton, sortingButton } from "./Buttons";
import { service, singleService } from "./Service";
import { technicians, singleTechnician } from "./Technicians";

export default combineReducers({
  navigationButton,
  sortingButton,
  service,
  singleService,
  technicians,
  singleTechnician,
});
