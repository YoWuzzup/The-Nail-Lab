import { combineReducers } from "redux";

// Reducers
import { navigationButton, sortingButton } from "./Buttons";
import { service, singleService } from "./Service";
import { technicians, singleTechnician } from "./Technicians";
import { checkoutService } from "./checkoutService";
import { buyerInfo } from "./Buyer";
import { bookings } from "./Bookings";
import { user } from "./User";

export default combineReducers({
  navigationButton,
  sortingButton,
  service,
  singleService,
  technicians,
  singleTechnician,
  checkoutService,
  buyerInfo,
  bookings,
  user,
});
