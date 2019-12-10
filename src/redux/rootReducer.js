import { combineReducers } from "redux";
import flightsReducer from "./flights/flightsReducer";
import locationReducer from "./location/locationReducer";
import nearestFlightsReducer from "./nearestFlights/nearestReducer";
import modalReducer from "./locationModal/modalReducer";

const rootReducer = combineReducers({
  flights: flightsReducer,
  location: locationReducer,
  nearestFlights: nearestFlightsReducer,
  locationModal: modalReducer
});

export default rootReducer;
